import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import PokemonCard from './PokemonCard';

export default function PokemonGrid() {
    const { pokemon } = useContext(AppContext);

    return (
        <div className="grid grid-cols-5 gap-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
            {pokemon.slice(0, 20).map(x => (<PokemonCard name={x.name} />))}
        </div>
    );
}