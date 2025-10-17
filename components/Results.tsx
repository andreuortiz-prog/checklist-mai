
import React, { forwardRef } from 'react';
import { Result } from '../types';
import RadarChartComponent from './RadarChartComponent';
import { RECOMMENDATIONS } from '../constants/recommendations';
import { ArrowRightIcon, LightBulbIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface ResultsProps {
    results: Result[];
}

const getMaturityLevel = (score: number): { level: string, color: string, bgColor: string } => {
    if (score <= 1.5) return { level: "Inexistente / Ad-hoc", color: "text-red-700", bgColor: "bg-red-100" };
    if (score <= 2.5) return { level: "Inicial / Repetible", color: "text-orange-700", bgColor: "bg-orange-100" };
    if (score <= 3.5) return { level: "Definido", color: "text-yellow-700", bgColor: "bg-yellow-100" };
    if (score <= 4.5) return { level: "Gestionado", color: "text-sky-700", bgColor: "bg-sky-100" };
    return { level: "Optimizado", color: "text-green-700", bgColor: "bg-green-100" };
};

const Results = forwardRef<HTMLDivElement, ResultsProps>(({ results }, ref) => {
    const overallScore = results.reduce((acc, r) => acc + r.score, 0) / results.length;
    const { level: overallLevel, color: overallColor } = getMaturityLevel(overallScore);

    const sortedResults = [...results].sort((a, b) => a.score - b.score);
    const lowestScoringArea = sortedResults[0];
    const highestScoringArea = sortedResults[sortedResults.length - 1];

    return (
        <div ref={ref} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full">
            <div className="text-center mb-8 border-b border-slate-200 pb-6">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Resultados de Madurez en IA</h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">Este es un resumen de las capacidades actuales de su organización, destacando fortalezas y áreas de oportunidad.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Nivel de Madurez General</h3>
                    <div className="text-center">
                         <p className={`text-5xl font-extrabold ${overallColor}`}>{overallScore.toFixed(2)}</p>
                         <p className={`text-xl font-semibold mt-1 ${overallColor}`}>{overallLevel}</p>
                    </div>
                    <div className="mt-6 space-y-3 text-sm text-slate-700">
                       <div className="flex items-start bg-green-50 p-3 rounded-lg">
                           <LightBulbIcon className="h-6 w-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                           <p><span className="font-semibold text-green-800">Fortaleza Principal:</span> {highestScoringArea.category} ({highestScoringArea.score.toFixed(2)})</p>
                       </div>
                       <div className="flex items-start bg-red-50 p-3 rounded-lg">
                            <ExclamationTriangleIcon className="h-6 w-6 mr-3 text-red-500 flex-shrink-0 mt-0.5" />
                           <p><span className="font-semibold text-red-800">Área de Mejora Crítica:</span> {lowestScoringArea.category} ({lowestScoringArea.score.toFixed(2)})</p>
                       </div>
                    </div>
                </div>
                 <div className="h-80 md:h-96">
                    <RadarChartComponent data={results} />
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-200 pb-3">Plan de Acción Personalizado</h3>
                <div className="space-y-6">
                    {results.map((result) => {
                        const recommendation = RECOMMENDATIONS[result.key];
                        const { level, color, bgColor } = getMaturityLevel(result.score);
                        return (
                            <div key={result.key} className="bg-slate-50 p-5 rounded-xl border border-slate-200 transition-shadow hover:shadow-md">
                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
                                    <h4 className="text-xl font-bold text-indigo-700">{result.category}</h4>
                                    <span className={`font-bold px-3 py-1 rounded-full text-sm ${bgColor} ${color}`}>{level} - {result.score.toFixed(2)}</span>
                                </div>
                                
                                {recommendation && (
                                     <ul className="space-y-4 text-slate-700">
                                        <li className="flex items-start">
                                            <ArrowRightIcon className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <span className="font-semibold text-green-800">Acción Inmediata:</span>
                                                <p className="text-sm">{recommendation.immediate}</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <ArrowRightIcon className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <span className="font-semibold text-blue-800">Siguiente Paso:</span>
                                                <p className="text-sm">{recommendation.nextStep}</p>
                                            </div>
                                        </li>
                                         <li className="flex items-start">
                                            <ArrowRightIcon className="h-5 w-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                                            <div>
                                                <span className="font-semibold text-purple-800">Largo Plazo:</span>
                                                <p className="text-sm">{recommendation.longTerm}</p>
                                            </div>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
});

Results.displayName = 'Results';

export default Results;
