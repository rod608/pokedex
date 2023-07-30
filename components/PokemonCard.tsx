import { GeneralPokemon } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  pokemon: GeneralPokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div>
      <Link href={`/${pokemon.name}`}>
        <div className="border flex justify-center pokemon_card">
          <div className="py-4 flex flex-col">
            <Image
              src={pokemon.front_sprite}
              alt={`Image of ${pokemon.name}`}
              width={"150"}
              height={"150"}
            ></Image>
          </div>
        </div>
      </Link>
      <div className="flex">
        <p className="text-slate-500 ms-2 mt-1">{`#${pokemon.id.toString().padStart(4, '0')}`}</p>
        <p className="text-slate-700 capitalize font-sans text-2xl ms-4">
          {pokemon.name}
        </p>
      </div>
    </div>
  );
}
