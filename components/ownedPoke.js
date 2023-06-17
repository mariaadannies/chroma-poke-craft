// OwnedPokemonPage.js

import React, { useState, useEffect } from 'react';

const OwnedPokemonPage = () => {
  const [ownedPokemons, setOwnedPokemons] = useState([]);

  useEffect(() => {
    // Retrieve owned pokemons from localStorage
    const storedPokemons = localStorage.getItem('ownedPokemons');
    if (storedPokemons) {
      setOwnedPokemons(JSON.parse(storedPokemons));
    }
  }, []);

  const releasePokemon = (pokemonId) => {
    // Remove the pokemon from ownedPokemons array
    const updatedPokemons = ownedPokemons.filter((pokemon) => pokemon.id !== pokemonId);
    setOwnedPokemons(updatedPokemons);
    // Update localStorage
    localStorage.setItem('ownedPokemons', JSON.stringify(updatedPokemons));
  };

  return (
    <div>
      <h2>Owned Pokemons</h2>
      {ownedPokemons.length > 0 ? (
        <ul>
          {ownedPokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <img src={pokemon.image} alt={pokemon.name} />
              <span>{pokemon.name}</span>
              <button onClick={() => releasePokemon(pokemon.id)}>Release</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pokemons owned yet.</p>
      )}
    </div>
  );
};

export default OwnedPokemonPage;
