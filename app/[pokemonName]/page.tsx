export default function PokemonPage({ params }: { params: { pokemonName: string } }) {
  const { pokemonName } = params;

  return (
    <div>
      <h1>{pokemonName === "nidoqueen" ? "Hi baby!!! 😘😘😘" : pokemonName}</h1>
    </div>
  );
}
