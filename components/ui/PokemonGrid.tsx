'use client'
import { useState } from "react";

export default function PokemonList({pokemonData}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            {pokemonData.results.map(p => (
                <div key={p.id}>
                    <h2>{p.name}</h2>
                </div>
            ))}
        </div>
    );
}