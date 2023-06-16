import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import classnames from 'classnames';

const PokemonDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const { name, sprites, types, weight, height, abilities, moves, stats } = pokemon;

  return (
    <div>
      <h1>Pokemon Detail - {name}</h1>
      <img src={sprites.front_default} alt={name} />

      <h2>Type</h2>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>

      <h2>Weight</h2>
      <p>{weight}</p>

      <h2>Height</h2>
      <p>{height}</p>

      <h2>Abilities</h2>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>

      <h2>Moves</h2>
      <ul>
        {moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>

      <h2>Stats</h2>
      <ul>
        {stats.map((stat) => (
          <li
            key={stat.stat.name}
            className={classnames({ 'is-good': stat.base_stat >= 60 })}
          >
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;