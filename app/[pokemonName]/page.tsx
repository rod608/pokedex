import { getPokemonData } from "@/lib/pokeAPI";
import { IndividualPokemon } from "@/types";

import Image from "next/image";
import PokemonStat from "@/components/PokemonStat";
import PokemonType from "@/components/PokemonType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;
  const pokemonData: IndividualPokemon = await getPokemonData(pokemonName);
  const typesList: string[] = [];

  for (const key in pokemonData.types) {
    const types = pokemonData.types[key];
    // typesList.push([name]);
  }

  return (
    <div className="mt-12 mb-8 mx-auto container">
      <h1 className="text-center text-4xl capitalize ">
        {pokemonName}
        <span className="text-slate-500">
          {" #" + pokemonData.id.toString().padStart(4, "0")}
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 border mt-8 bg-slate-200 p-4">
        <div className="bg-slate-100">
          <Image
            src={pokemonData.sprites.front_default}
            alt={"Picture of " + { pokemonName }}
            width="500"
            height="500"
            className="mx-auto"
          />
        </div>

        <div className="border bg-slate-100">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Types</p>
              </AccordionTrigger>
              <AccordionContent>
                {pokemonData.types.map((typeObject) => {
                  return (
                    <PokemonType
                      name={typeObject.type.name}
                      key={pokemonData.id}
                    />
                  );
                })}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Description</p>
              </AccordionTrigger>
              <AccordionContent>description</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Height</p>
              </AccordionTrigger>
              <AccordionContent>{pokemonData.height}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Weight</p>
              </AccordionTrigger>
              <AccordionContent>{pokemonData.weight}</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Base Stats</p>
              </AccordionTrigger>
              <AccordionContent>
                {pokemonData.stats.map((statObject) => {
                  return (
                    <PokemonStat
                      statName={statObject.stat.name}
                      statValue={statObject.base_stat}
                      key={pokemonData.id}
                    />
                  );
                })}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Abilities</p>
              </AccordionTrigger>
              <AccordionContent>abilities</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Sprites</p>
              </AccordionTrigger>
              <AccordionContent>Sprites</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="px-2">
              <AccordionTrigger>
                <p className="font-mono">Moves</p>
              </AccordionTrigger>
              <AccordionContent>Moves</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
