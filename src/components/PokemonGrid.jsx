import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import PokemonCard from './PokemonCard';

export default function PokemonGrid() {
    const { isLoading, pokemons } = useContext(AppContext);

    return (
        <div className="grid grid-cols-5 gap-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
            {isLoading ? <span>Loading Pokemon...</span> : pokemons.slice(0, 20).map(x => (<PokemonCard key={x.name} name={x.name} />))}
        </div >
    );
}