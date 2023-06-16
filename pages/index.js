import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        <li>
          <Link href="/pokemon/1">
            <a>Bulbasaur</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon/4">
            <a>Charmander</a>
          </Link>
        </li>
        <li>
          <Link href="/pokemon/7">
            <a>Squirtle</a>
          </Link>
        </li>
        {/* Add more pokemons */}
      </ul>
    </div>
  );
};

export default Home;
