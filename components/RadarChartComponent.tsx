
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Result } from '../types';

interface RadarChartComponentProps {
    data: Result[];
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ data }) => {
    const chartData = data.map(item => ({
        subject: item.category.split(' ')[0], // Use short name for axis label
        score: item.score,
        fullMark: 5,
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <defs>
                    <radialGradient id="colorScore">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                    </radialGradient>
                </defs>
                <PolarGrid stroke="#e0e7ff" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14 }} />
                <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} />
                <Radar 
                  name="Puntuación" 
                  dataKey="score" 
                  stroke="#6366f1" 
                  fill="url(#colorScore)" 
                  fillOpacity={0.8} 
                  strokeWidth={2}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                  }}
                />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartComponent;
