import { Pokemon } from '@/types';
import Image from 'next/image';

interface PokemonCardProps {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    console.log(pokemon)
    return(
        <div>
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.id}</h2>
            <Image src={pokemon.front_sprite} alt={`Image of ${pokemon.name}`} width={"100"} height={"100"}></Image>
        </div>
    );
}