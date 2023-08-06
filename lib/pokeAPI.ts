import { GeneralPokemon, IndividualPokemon } from '@/types'

const ENDPOINT = "https://pokeapi.co/api/v2/";

// All 151 Original Pokemon
export async function getAllPokemonData() {
    const response = await fetch(ENDPOINT + "pokemon?limit=151&offset=0");
    const data = await response.json();
    return addImagesToPokemonData(data.results);
}
  
  async function addImagesToPokemonData(pokemonList: GeneralPokemon[]) {
    pokemonList.forEach((pokemon: GeneralPokemon) => {
      pokemon.id = pokemon.url.split('/')[6];
      pokemon.front_sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
    })
    return pokemonList;
  }

// Individual Pokemon
export async function getPokemonData(name: string) {
    const response = await fetch(ENDPOINT + `pokemon/${name}`);
    const data: IndividualPokemon = await response.json();
    return data;
}
