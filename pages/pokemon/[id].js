import React from 'react';
import styles from '../../styles/globals.css';
import DetailPoke from '../../components/detailPoke';
import Navbar from '../../components/navbar';

const PokemonDetail = () => {
  return (
      <div className={styles.container}>
        <Navbar />
        <DetailPoke />
      </div>
  );
};

export default PokemonDetail;
