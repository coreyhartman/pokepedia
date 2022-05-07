import React, { useState, useEffect } from 'react';
import { getAllPokemon } from '../pokeApi';

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        console.log('Getting all pokemon');
        getAllPokemon().then(x => setPokemon(x));
    }, []);

    return <AppContext.Provider value={{ pokemon }}>{children}</AppContext.Provider>;
}

export default AppContext;