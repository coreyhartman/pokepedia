import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

export default function PokemonGrid() {
    const { pokemon } = useContext(AppContext);

    return (
        <React.Fragment>
            {pokemon.map(x => (<div key={x.name}>{x.name}</div>))}
        </React.Fragment>
    );
}