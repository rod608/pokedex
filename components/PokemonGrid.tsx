'use client'
import PokemonCard from '@/components/PokemonCard'

export interface Pokemon {
    name: string;
    url: string;
    sprites: object;
}

interface PokemonListProps {
    pokemonData: Pokemon[];
}

export default function PokemonList({ pokemonData }: PokemonListProps) {
    return (
        <div>
            {pokemonData.map(pokemon => (
                <div key={pokemon.name}>
                    <PokemonCard pokemon={pokemon}/>
                </div>
            ))}
        </div>
    );
}