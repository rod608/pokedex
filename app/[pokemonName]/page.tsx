import { getPokemonData } from "@/lib/pokeAPI"

interface PokemonData {
    name: string;
    id: number;
    sprites: {
        back_default: string,
        back_female: string, 
        back_shiny: string,
        back_shiny_female: string,
        front_default: string,
        front_female: string, 
        front_shiny: string,
        front_shiny_female: string
    };
    weight: number;
    height: number;
}

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;
  const pokemonData: PokemonData = await getPokemonData(pokemonName);
  console.log(pokemonData);

  return (
    <div>
      <h1>{pokemonName}</h1>
      <h1>{pokemonData.id}</h1>
    </div>
  );
}
