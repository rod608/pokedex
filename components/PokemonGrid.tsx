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

  return (
    <div className="container">
      <div className="mt-16">
        <Input
          type="text"
          value={searchValue}
          id="pokemonSearch"
          placeholder="Search Pokemon"
          className="w-1/2 mx-auto"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 my-8">
        {pokemonList.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
        I
      </div>
    </div>
  );
}
