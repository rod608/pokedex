import { getPokemonData } from "@/lib/pokeAPI";
import { IndividualPokemon } from "@/types";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonData: IndividualPokemon = await getPokemonData(pokemonName);
  console.log(pokemonData);

  return (
    <div>
      <h1>{pokemonName}</h1>
      <h1>{pokemonData.id}</h1>
    </div>
  );
}
