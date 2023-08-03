import { getPokemonData } from "@/lib/pokeAPI";
import { IndividualPokemon } from "@/types";

import Image from "next/image";
import PokemonStat from "@/components/PokemonStat";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonData: IndividualPokemon = await getPokemonData(pokemonName);
  const typesList: string[] = [];

  for (const key in pokemonData.types) {
    const types = pokemonData.types[key];
    // typesList.push([name]);
  }

  return (
    <div className="mt-12 mb-8 mx-auto" style={{ maxWidth: "1024px" }}>
      <h1 className="text-center text-4xl capitalize ">
        {pokemonName}
        <span className="text-slate-500">
          {" #" + pokemonData.id.toString().padStart(4, "0")}
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 border mt-8">
        <div className="">
          <Image
            src={pokemonData.sprites.front_default}
            alt={"Picture of " + { pokemonName }}
            width="500"
            height="500"
            className="border mx-auto"
          />

          <div>
            {pokemonData.stats.map((statObject) => {
              return (
                <PokemonStat statName={statObject.stat.name} statValue={statObject.base_stat} key={pokemonData.id}/>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col border">
          data
          <div className="">Types:</div>
          {pokemonData.height}
          {pokemonData.stats.length}
        </div>
      </div>
    </div>
  );
}
