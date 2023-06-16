import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styles from '../styles/index.module.css';

const ListPoke = () => {
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
    <div className={styles.container}>
      <h1 className={styles.title}>Pokemon List</h1>
      <br></br>
      <br></br>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className={styles.cardList}>
          {pokemonList.map((pokemon) => (
            <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <div className={styles.myCard}>
                <div className={styles.innerCard}>
                  <div className={styles.frontSide}>
                    <img className={styles.title} src={pokemon.sprites.front_default} alt={pokemon.name}></img>
                  </div>
                  <div className={styles.backSide}>
                    <p className={styles.title}>{pokemon.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListPoke;
