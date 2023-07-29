import { Pokemon } from '@/types';
import PokemonCard from '@/components/PokemonCard'

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