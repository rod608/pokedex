import { getPokemonData } from "@/lib/pokeAPI";
import PokemonGrid from "@/components/PokemonGrid";

export default async function Home() {
  const pokemonData = await getPokemonData();
  console.log(pokemonData);

  return (
    <main>
      <div>
        <PokemonGrid pokemonData={pokemonData} />
      </div>
    </main>
  );
}
