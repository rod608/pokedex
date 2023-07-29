import { Pokemon } from '@/types'

// All 151 Original Pokemon
export async function getPokemonData() {
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

// Information on Individual Pokemon
