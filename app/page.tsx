async function getPokemonData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  return response.json();
}

export default async function Home() {
  const data = await getPokemonData();
  console.log(data);

  return (
    <main>
      <div>
        <h1>Hello, World!</h1>
      </div>
    </main>
  )
}


