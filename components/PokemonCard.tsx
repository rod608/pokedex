import Image from 'next/image';
import { Pokemon } from '@/components/PokemonGrid'

export default function PokemonCard({ pokemon }) {
    console.log(pokemon)
    return(
        <div>
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.id}</h2>
            <h2>{pokemon.height}</h2>
            <Image src={pokemon.front_sprite} alt={`Image of ${pokemon.name}`} width={"100"} height={"100"}></Image>
        </div>
    );
}