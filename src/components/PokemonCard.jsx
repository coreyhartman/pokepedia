import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function PokemonCard({ name }) {
    const { pokemons } = useContext(AppContext);
    const pokemon = pokemons.find(x => x.name === name);

    return (
        <div className="p-4 flex flex-col items-center space-y-2 bg-gray-50 rounded-md">
            <img src={pokemon.sprites.front_default} className="w-30 h-30" />
            <span>{pokemon.name}</span>
        </div>
    )
}