import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES } from './constants/questions';
import { CategoryKey, Result } from './types';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';
import Header from './components/Header';
import { ArrowPathIcon, CheckCircleIcon, PlayCircleIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type AppState = 'intro' | 'questionnaire' | 'results';

const App: React.FC = () => {
    const [appState, setAppState] = useState<AppState>('intro');
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState<number>(0);
    const [results, setResults] = useState<Result[]>([]);
    const [isDownloading, setIsDownloading] = useState(false);
    const resultsRef = useRef<HTMLDivElement>(null);

    const totalQuestions = useMemo(() => CATEGORIES.reduce((acc, cat) => acc + cat.questions.length, 0), []);
    const answeredQuestions = useMemo(() => Object.keys(answers).length, [answers]);
    const progress = useMemo(() => (answeredQuestions / totalQuestions) * 100, [answeredQuestions, totalQuestions]);

    const handleAnswerChange = (questionId: string, score: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: score }));
    };

    const handleNextCategory = () => {
        if (currentCategoryIndex < CATEGORIES.length - 1) {
            setCurrentCategoryIndex(prev => prev + 1);
        }
    };

    const handlePrevCategory = () => {
        if (currentCategoryIndex > 0) {
            setCurrentCategoryIndex(prev => prev - 1);
        }
    };

    const handleCalculateResults = () => {
        const calculatedResults = CATEGORIES.map(category => {
            const categoryQuestionIds = category.questions.map(q => q.id);
            const categoryAnswers = categoryQuestionIds.map(id => answers[id] || 0);
            const totalScore = categoryAnswers.reduce((sum, score) => sum + score, 0);
            const averageScore = totalScore > 0 ? totalScore / category.questions.length : 0;
            return {
                category: category.title,
                key: category.key,
                score: parseFloat(averageScore.toFixed(2)),
            };
        });
        setResults(calculatedResults);
        setAppState('results');
    };

    const handleReset = () => {
        setAnswers({});
        setCurrentCategoryIndex(0);
        setResults([]);
        setAppState('intro');
    };

    const handleDownloadPdf = () => {
        if (!resultsRef.current) return;
        setIsDownloading(true);
        html2canvas(resultsRef.current, { scale: 2, backgroundColor: null })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('reporte-madurez-ia.pdf');
            })
            .finally(() => {
                setIsDownloading(false);
            });
    };

    const renderContent = () => {
        switch (appState) {
            case 'intro':
                return (
                    <div className="text-center p-8 bg-white rounded-2xl shadow-xl animate__animated animate__fadeIn">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Evalúe la Madurez de su Organización en IA</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                            Esta herramienta interactiva le ayudará a diagnosticar las capacidades de su empresa para adoptar la inteligencia artificial. Obtendrá un análisis visual de sus fortalezas y debilidades, junto con un plan de acción personalizado.
                        </p>
                        <button
                            onClick={() => setAppState('questionnaire')}
                            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto"
                        >
                            <PlayCircleIcon className="h-6 w-6 mr-2" />
                            Iniciar Diagnóstico
                        </button>
                    </div>
                );
            case 'questionnaire':
                const allQuestionsAnswered = answeredQuestions === totalQuestions;
                return (
                    <div className="w-full animate__animated animate__fadeIn">
                         <div className="w-full bg-gray-200 rounded-full h-4 mb-6 dark:bg-gray-700 shadow-inner">
                            <div className="bg-indigo-600 h-4 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                         </div>
                        <Questionnaire
                            category={CATEGORIES[currentCategoryIndex]}
                            answers={answers}
                            onAnswerChange={handleAnswerChange}
                        />
                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handlePrevCategory}
                                disabled={currentCategoryIndex === 0}
                                className="bg-slate-300 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Anterior
                            </button>
                            {currentCategoryIndex < CATEGORIES.length - 1 ? (
                                <button
                                    onClick={handleNextCategory}
                                    className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    Siguiente
                                </button>
                            ) : (
                                <button
                                    onClick={handleCalculateResults}
                                    disabled={!allQuestionsAnswered}
                                    className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                   <CheckCircleIcon className="h-5 w-5 mr-2" />
                                    Ver Resultados
                                </button>
                            )}
                        </div>
                    </div>
                );
            case 'results':
                return (
                    <div className="w-full animate__animated animate__fadeIn">
                        <Results results={results} ref={resultsRef} />
                        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                             <button
                                onClick={handleDownloadPdf}
                                disabled={isDownloading}
                                className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto disabled:opacity-50 disabled:cursor-wait"
                            >
                                <ArrowDownTrayIcon className="h-6 w-6 mr-2" />
                                {isDownloading ? 'Generando PDF...' : 'Descargar Resultados'}
                            </button>
                            <button
                                onClick={handleReset}
                                className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
                            >
                                <ArrowPathIcon className="h-6 w-6 mr-2" />
                                Realizar Otro Diagnóstico
                            </button>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-slate-100">
            <Header />
            <main className="w-full max-w-5xl mx-auto flex-grow flex items-start justify-center">
                {renderContent()}
            </main>
        </div>
    );
};

export default App;