import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const results = response.data.results;
        const pokemonDataPromises = results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        });
        const pokemonData = await Promise.all(pokemonDataPromises);
        setPokemonList(pokemonData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {pokemonList.map((pokemon) => (
            <li key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;