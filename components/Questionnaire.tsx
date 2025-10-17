
import React from 'react';
import { Category, SCORE_LABELS } from '../types';

interface QuestionnaireProps {
    category: Category;
    answers: Record<string, number>;
    onAnswerChange: (questionId: string, score: number) => void;
}

const Questionnaire: React.FC<QuestionnaireProps> = ({ category, answers, onAnswerChange }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-200 pb-4">{category.title}</h2>
            <div className="space-y-8">
                {category.questions.map((question, index) => (
                    <div key={question.id} className="animate__animated animate__fadeInUp" style={{animationDelay: `${index * 100}ms`}}>
                        <p className="text-lg font-semibold text-slate-700 mb-4">{question.text}</p>
                        <fieldset className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {Object.entries(SCORE_LABELS).map(([score, label]) => {
                                const scoreNum = parseInt(score, 10);
                                const isSelected = answers[question.id] === scoreNum;
                                return (
                                    <label
                                        key={score}
                                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-200 w-full md:w-auto flex-grow text-center ${
                                            isSelected
                                                ? 'bg-indigo-600 border-indigo-700 text-white shadow-lg'
                                                : 'bg-slate-50 border-slate-200 hover:border-indigo-400 hover:bg-indigo-50'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={score}
                                            checked={isSelected}
                                            onChange={() => onAnswerChange(question.id, scoreNum)}
                                            className="sr-only"
                                        />
                                        <span className="font-bold text-xl">{score}</span>
                                        <span className="block text-xs mt-1">{label}</span>
                                    </label>
                                );
                            })}
                        </fieldset>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questionnaire;
