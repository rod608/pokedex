import { getPokemonData } from "@/lib/pokeAPI";
import { IndividualPokemon } from "@/types";

import Image from "next/image";
import PokemonStat from "@/components/PokemonStat";
import PokemonType from "@/components/PokemonType";

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
    <div className="mt-12 mb-8 mx-auto container">
      <h1 className="text-center text-4xl capitalize ">
        {pokemonName}
        <span className="text-slate-500">
          {" #" + pokemonData.id.toString().padStart(4, "0")}
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 border mt-8 bg-slate-200 p-4">
        <div className="bg-slate-100">
          <Image
            src={pokemonData.sprites.front_default}
            alt={"Picture of " + { pokemonName }}
            width="500"
            height="500"
            className="border mx-auto"
          />

          <div className="mx-10 border bg-slate-100">
            data
            <div className="border">
              Types:
              {pokemonData.types.map((typeObject) => {
                return (
                  <PokemonType
                    name={typeObject.type.name}
                    key={pokemonData.id}
                  />
                );
              })}
            </div>
            {pokemonData.height}
            {pokemonData.stats.length}
          </div>
        </div>

        <div className="border bg-slate-100">
          {pokemonData.stats.map((statObject) => {
            return (
              <PokemonStat
                statName={statObject.stat.name}
                statValue={statObject.base_stat}
                key={pokemonData.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
