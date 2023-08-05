import { Progress } from "@/components/ui/progress";

interface PokemonStatsProps {
  statName: string;
  statValue: number;
}

export default function PokemonStats({
  statName,
  statValue,
}: PokemonStatsProps) {
  return (
    <div className="flex items-stretch mx-auto w-3/4">
      <h3 className="p-3 w-2/4 capitalize">
        {statName}: {statValue}
      </h3>
      <Progress className="w-2/4 m-auto" value={statValue} />
    </div>
  );
}
