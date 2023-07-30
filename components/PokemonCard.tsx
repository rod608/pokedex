import { Pokemon } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const pokemonName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <Link href={`/${pokemon.name}`}>
      <div key={pokemon.id} className="border flex justify-center">
        <div className="py-4 flex flex-col">
          <h2 className="mx-auto">{pokemonName}</h2>
          <Image
            src={pokemon.front_sprite}
            alt={`Image of ${pokemonName}`}
            width={"100"}
            height={"100"}
          ></Image>
        </div>
      </div>
    </Link>
  );
}
