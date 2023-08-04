interface PokemonTypeProps {
  name: string;
}

export default function PokemonType({ name }: PokemonTypeProps) {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}
