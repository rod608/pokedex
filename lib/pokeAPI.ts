import { Pokemon } from '@/types'

// All 151 Original Pokemon
export async function getAllPokemonData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await response.json();
    return addImagesToPokemonData(data.results);
}
  
  async function addImagesToPokemonData(pokemonList: Pokemon[]) {
    pokemonList.forEach((pokemon: Pokemon) => {
      pokemon.id = pokemon.url.split('/')[6];
      pokemon.front_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
    })
    return pokemonList;
  }

// Individual Pokemon
export async function getPokemonData(name: string) {
    const response = await fetch(`https://pokeapi.co/api/v2//pokemon/${name}`);
    const data = await response.json();
    return data;
}