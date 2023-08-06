import { IndividualPokemon } from "@/types";

import Image from "next/image";
import PokemonStat from "@/components/PokemonStat";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PokemonAccordionProps {
  pokemonObj: IndividualPokemon;
}

export default function PokemonAccordion({
  pokemonObj,
}: PokemonAccordionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="px-2">
        <AccordionTrigger>
          <p className="font-mono">Sprites</p>
        </AccordionTrigger>
        <AccordionContent>
            <div className="flex">
                <Image src={pokemonObj.sprites.front_default} alt={`Image of ${pokemonObj.name} from the front`} width={100} height={100}/>
                <Image src={pokemonObj.sprites.back_default} alt={`Image of ${pokemonObj.name} from the front`} width={100} height={100}/>
                <Image src={pokemonObj.sprites.front_shiny} alt={`Image of ${pokemonObj.name} from the front`} width={100} height={100}/>
                <Image src={pokemonObj.sprites.back_shiny} alt={`Image of ${pokemonObj.name} from the front`} width={100} height={100}/>
            </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="px-2">
        <AccordionTrigger>
          <p className="font-mono">Types</p>
        </AccordionTrigger>
        <AccordionContent>
          {pokemonObj.types.map((typeObject) => {
            return (
              <li key={pokemonObj.id} className="capitalize">
                {typeObject.type.name}
              </li>
            );
          })}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="px-2">
        <AccordionTrigger>
          <p className="font-mono">Abilities</p>
        </AccordionTrigger>
        <AccordionContent>
          {pokemonObj.abilities.map((abilityObject) => {
            return (
              <li key={pokemonObj.id} className="capitalize">
                {abilityObject.ability.name}
              </li>
            );
          })}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="px-2">
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

      <AccordionItem value="item-5" className="px-2">
        <AccordionTrigger>
          <p className="font-mono">Height</p>
        </AccordionTrigger>
        <AccordionContent>
          {(pokemonObj.height * 0.3281).toFixed(1)} feet
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6" className="px-2">
        <AccordionTrigger>
          <p className="font-mono">Weight</p>
        </AccordionTrigger>
        <AccordionContent>
          {(pokemonObj.weight * 0.2205).toFixed(1)} lbs
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7" className="px-2">
        <AccordionTrigger>
          <p className="font-mono">Moves</p>
        </AccordionTrigger>
        <AccordionContent>
            {pokemonObj.moves.map((movesObj) => {
                return(
                    <li key={pokemonObj.id} className="capitalize">{movesObj.move.name}</li>
                );
            })}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
