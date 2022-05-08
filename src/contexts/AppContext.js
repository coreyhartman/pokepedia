import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../pokeApi';

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getAllPokemon().then(x => setPokemon(x));
    }, []);

    function getPokemonCardInfo(name) {
        return getPokemon(name)
            .then(x => {
                return { id: x.id, name: x.name, img: x.sprites.front_default };
            });
    }

    return <AppContext.Provider value={{ pokemon, getPokemonCardInfo }}>{children}</AppContext.Provider>;
}

export default AppContext;