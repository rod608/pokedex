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

interface PokemonAccordionProps {
  pokemonObj: IndividualPokemon;
}

export default function PokemonAccordion({ pokemonObj }: PokemonAccordionProps) {
  return (
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="px-2">
          <AccordionTrigger>
            <p className="font-mono">Types</p>
          </AccordionTrigger>
          <AccordionContent>
            {pokemonObj.types.map((typeObject) => {
              return (
                <PokemonType name={typeObject.type.name} key={pokemonObj.id} />
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
          <AccordionContent>{pokemonObj.height}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="px-2">
          <AccordionTrigger>
            <p className="font-mono">Weight</p>
          </AccordionTrigger>
          <AccordionContent>{pokemonObj.weight}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="px-2">
          <AccordionTrigger>
            <p className="font-mono">Base Stats</p>
          </AccordionTrigger>
          <AccordionContent>
            {pokemonObj.stats.map((statObject) => {
              return (
                <PokemonStat
                  statName={statObject.stat.name}
                  statValue={statObject.base_stat}
                  key={pokemonObj.id}
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
  );
}
