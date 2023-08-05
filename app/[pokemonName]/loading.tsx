import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonLoading() {
  return (
    <div className="container mt-12 mb-8 mx-auto">
      <div className="flex justify-center">
          <Skeleton className="w-[150px] h-[40px] rounded-full" />
          <span className="mx-2"></span>
          <Skeleton className="w-[100px] h-[40px] rounded-full" />
      </div>

      <Skeleton className="mt-8 p-4 h-[850px] md:h-[535px]" />
    </div>
  );
}
