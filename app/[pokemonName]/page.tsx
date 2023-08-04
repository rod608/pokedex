import { getPokemonData } from "@/lib/pokeAPI";
import { IndividualPokemon } from "@/types";

import Image from "next/image";
import PokemonAccordion from "@/components/PokemonAccordion";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonObj: IndividualPokemon = await getPokemonData(pokemonName);

  return (
    <div className="mt-12 mb-8 mx-auto container">
      <h1 className="text-center text-4xl capitalize ">
        {pokemonName}
        <span className="text-slate-500">
          {" #" + pokemonObj.id.toString().padStart(4, "0")}
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 border mt-8 bg-slate-200 p-4">
        <div className="bg-slate-100">
          <Image
            src={pokemonObj.sprites.front_default}
            alt={"Picture of " + { pokemonName }}
            width="500"
            height="500"
            className="mx-auto"
          />
        </div>

        <div className="border bg-slate-100">
          <PokemonAccordion pokemonObj={pokemonObj} />
        </div>
      </div>
    </div>
  );
}
