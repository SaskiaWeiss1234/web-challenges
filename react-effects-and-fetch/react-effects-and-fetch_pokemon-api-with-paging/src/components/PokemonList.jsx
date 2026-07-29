import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0"
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);
  const handleNextPokemon
  


  return (
    <main>
      <button type="button">Previous Page</button>
      <button onClick={handleNextPokemon} type="button">Next Page</button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
