import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../pokeApi';

const AppContext = React.createContext();

export function AppProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let data = [];

        getAllPokemon()
            .then(x => {
                x.map(y => {
                    getPokemon(y.name)
                        .then(z => data.push(z))
                });
            })
            .finally(() => {
                setPokemons(data);
                setIsLoading(false);
            });
    }, []);

    return <AppContext.Provider value={{ pokemons, isLoading }}>{children}</AppContext.Provider>;
}

export default AppContext;