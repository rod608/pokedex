import { getPokemonData } from '@/lib/pokeAPI'
import PokemonGrid from '@/components/PokemonGrid'

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


