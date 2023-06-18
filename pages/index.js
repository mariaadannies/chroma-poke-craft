import React from 'react';
import styles from '../styles/globals.css';
import ListPoke from '../components/listPoke';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <ListPoke />
    </div>
  );
};

export default Home;
