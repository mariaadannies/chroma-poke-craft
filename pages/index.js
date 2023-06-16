import React from 'react';
import styles from '../styles/globals.css';
import ListPoke from '../components/listPoke';

const Home = () => {
  return (
    <div className={styles.container}>
      <ListPoke />
    </div>
  );
};

export default Home;
