import React from 'react'
import styles from '../../Pelis.module.css';
import { ContenedorPelis } from '../ContenedorPelis/ContenedorPelis';
export const Pelis = () => {
  return (
    <section className={styles.body}>
        <header>
            <h1 className={styles.header__title}>Ribera Films</h1>
            <hr />
        </header>
        <main>
            {/* Contenedor de peliculas  */}
            <ContenedorPelis/>
        </main>
    </section>
  )
}
