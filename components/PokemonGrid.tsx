"use client";

import { Pokemon } from "@/types";
import PokemonCard from "@/components/PokemonCard";

import { useState } from "react";
import { Input } from "@/components/ui/input";

interface PokemonListProps {
  pokemonList: Pokemon[];
}

export default function PokemonGrid({ pokemonList }: PokemonListProps) {
  const [searchValue, setSearchValue] = useState("");

  const filterPokemon = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const filteredPokemonList = filterPokemon(pokemonList);

  return (
    <div className="container">
      <div className="mt-16">
        <Input
          type="text"
          value={searchValue}
          id="pokemonSearch"
          placeholder="Search Pokemon"
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 my-8">
        {filteredPokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
}
