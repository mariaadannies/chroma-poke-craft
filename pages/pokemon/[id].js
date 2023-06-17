import React from 'react';
import styles from '../../styles/globals.css';
import DetailPoke from '../../components/detailPoke';

const PokemonDetail = () => {
  return (
      <div className={styles.container}>
        <DetailPoke />
      </div>
  );
};

export default PokemonDetail;
