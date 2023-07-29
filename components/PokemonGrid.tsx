import { Pokemon } from "@/types";
import PokemonCard from "@/components/PokemonCard";

interface PokemonListProps {
  pokemonData: Pokemon[];
}

export default function PokemonList({ pokemonData }: PokemonListProps) {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4 border p-8 my-14">
        {pokemonData.map((pokemon) => (
          <div key={pokemon.id} className="border flex justify-center">
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
