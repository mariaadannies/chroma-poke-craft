import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        <li>
          <Link href="/pokemon/1">
            Bulbasaur
          </Link>
        </li>
        <li>
          <Link href="/pokemon/4">
            Charmander
          </Link>
        </li>
        <li>
          <Link href="/pokemon/7">
            Squirtle
          </Link>
        </li>
        {/* Add more pokemons */}
      </ul>
    </div>
  );
};

export default Home;
