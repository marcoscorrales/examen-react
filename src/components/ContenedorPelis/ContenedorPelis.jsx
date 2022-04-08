import React from 'react'
import { getPeliculas } from '../../datos'
import { TarjetaPeli } from '../TarjetaPeli/TarjetaPeli';
import styles from '../../Pelis.module.css';
export const ContenedorPelis = () => {
    //Obtenemos todas las peliculas
    let peliculas = getPeliculas();
  return (
    <section className={styles.contenedor__pelis}>

        {
                peliculas.map((peli) => 
                //Por cada pelicula imprime una tarjeta
                <TarjetaPeli key={peli.id} id={peli.id} img={peli.poster} nombre={peli.title}/>
     
                )
                }
        

    </section>
  )
}
