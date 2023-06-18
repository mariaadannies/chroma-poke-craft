import React from 'react';
import styles from '../styles/globals.css';
import OwnedPoke from '../components/ownedPoke';
import Navbar from '../components/navbar';

const OwnedPokemon = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <OwnedPoke />
    </div>
  );
};

export default OwnedPokemon;
