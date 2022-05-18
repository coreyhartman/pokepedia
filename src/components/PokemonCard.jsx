import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../contexts/AppContext';

export default function PokemonCard({ name }) {
    const { getPokemonCardInfo } = useContext(AppContext);
    const [cardInfo, setCardInfo] = useState({});

    useEffect(() => { getPokemonCardInfo(name).then(x => setCardInfo(x)) }, []);

    return (
        <div className="p-4 flex flex-col items-center space-y-2 bg-gray-50 rounded-md">
            <img src={cardInfo ? cardInfo.img : ""} className="w-30 h-30" />
            <span>{name}</span>
        </div>
    )
}