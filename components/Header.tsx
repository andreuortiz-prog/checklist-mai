
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full max-w-5xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 py-2">
                Checklist de Madurez de IA
            </h1>
            <p className="text-slate-500 text-lg mt-2">Un GPS Estratégico para la Alta Dirección</p>
        </header>
    );
};

export default Header;
