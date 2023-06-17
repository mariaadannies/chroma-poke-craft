import React from 'react';
import styles from '../styles/globals.css';
import OwnedPoke from '../components/ownedPoke';

const OwnedPokemon = () => {
  return (
      <div className={styles.container}>
        <OwnedPoke />
      </div>
    );
};

export default OwnedPokemon;
