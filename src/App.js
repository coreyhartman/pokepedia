import React from 'react';
import PokemonGrid from './components/PokemonGrid';
import { AppProvider } from './contexts/AppContext';

export default function App() {
    return (
        <AppProvider>
            <div className="p-6 flex flex-col items-center min-h-screen w-full bg-gray-200">
                <PokemonGrid />
            </div>
        </AppProvider>
    );
}