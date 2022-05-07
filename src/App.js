import React from 'react';
import PokemonGrid from './components/PokemonGrid';
import { AppProvider } from './contexts/AppContext';

export default function App() {
    return (
        <AppProvider>
            <PokemonGrid />
        </AppProvider>
    );
}