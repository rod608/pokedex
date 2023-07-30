import { getPokemonData } from "@/lib/pokeAPI"

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;
  const pokemonData = await getPokemonData(pokemonName);
  console.log(pokemonData);

  return (
    <div>
      <h1>{pokemonName === "nidoqueen" ? "Hi baby!!! 😘😘😘" : pokemonName}</h1>
    </div>
  );
}
