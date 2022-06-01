import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import PokemonCard from './PokemonCard';

export default function PokemonGrid() {
    const { isLoading, pokemons } = useContext(AppContext);

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:w-3/4 md:grid-cols-4 lg:w-2/3 lg:grid-cols-5 xl:w-1/2 xl:grid-cols-6">
            {isLoading ? <span>Loading Pokemon...</span> : pokemons.slice(0, 24).map(x => (<PokemonCard key={x.name} name={x.name} />))}
        </div>
    );
}