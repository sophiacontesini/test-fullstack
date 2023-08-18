import React from 'react';
import styles from './Home.module.css';
import LinkButton from '../components/layout/LinkButton';
import clients from '../img/clients.png';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>ClientForm</span>
      </h1>
      <p>Comece a cadastrar os seus clientes agora mesmo!</p>
      <img src={clients} alt='logo' />

      <LinkButton to='/cadastrar' text='Cadastrar' />
    </section>
  );
}

export default Home;
