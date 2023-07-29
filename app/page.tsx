import { Pokemon } from '@/types';
import PokemonGrid from '@/components/PokemonGrid'

async function getPokemonData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
  const data = await response.json();
  return addImagesToPokemonData(data.results);
}

async function addImagesToPokemonData(pokemonList: any) {
  pokemonList.forEach((pokemon: Pokemon) => {
    const id = 0o0;
    pokemon.id = pokemon.url.split('/')[6];
    pokemon.front_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  })
  return pokemonList;
}

export default async function Home() {
  const pokemonData = await getPokemonData();

  return (
    <main>
      <div>
        <h1>Hello, World!</h1>
        <PokemonGrid pokemonData={pokemonData} />
      </div>
    </main>
  )
}


