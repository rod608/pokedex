import PokemonGrid from '@/components/ui/PokemonGrid'

async function getPokemonData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  return response.json();
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


