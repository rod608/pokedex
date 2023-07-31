import { getPokemonData } from "@/lib/pokeAPI";
import { IndividualPokemon } from "@/types";
import Image from "next/image";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonData: IndividualPokemon = await getPokemonData(pokemonName);

  console.log(pokemonData);

  return (
    <div className="container mt-12">
      <h1 className="text-center text-4xl capitalize ">
        {pokemonName}
        <span className="text-slate-500">
          {" #" + pokemonData.id.toString().padStart(4, "0")}
        </span>
      </h1>

      <div className="grid grid-cols-2 border mt-8">
        <div className="">
          <Image
            src={pokemonData.sprites.front_default}
            alt={"Picture of " + { pokemonName }}
            width="650"
            height="650"
            className="border mx-auto"
          />
          stats
        </div>

        <div className="flex flex-col border">data</div>
      </div>
    </div>
  );
}
