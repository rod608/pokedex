import { getAllPokemonData } from "@/lib/pokeAPI";
import PokemonGrid from "@/components/PokemonGrid";

export default async function Home() {
  const pokemonData = await getAllPokemonData();

  return (
    <main>
      <div>
        <PokemonGrid pokemonList={pokemonData} />
      </div>
    </main>
  );
}
