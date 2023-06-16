import React, { useState } from 'react';

const OwnedPokemon = () => {
  const [ownedPokemon, setOwnedPokemon] = useState([]);

  const handleRelease = (pokemonName) => {
    setOwnedPokemon((prevOwnedPokemon) =>
      prevOwnedPokemon.filter((pokemon) => pokemon !== pokemonName)
    );
  };

  return (
    <div>
      <h1>Owned Pokemon</h1>
      <ul>
        {ownedPokemon.length === 0 ? (
          <li>No owned pokemon.</li>
        ) : (
          ownedPokemon.map((pokemon) => (
            <li key={pokemon}>
              {pokemon}{' '}
              <button onClick={() => handleRelease(pokemon)}>Release</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default OwnedPokemon;
