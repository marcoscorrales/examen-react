import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPelicula } from '../../datos';
import styles from '../../Pelis.module.css';

export const ShowPeli = () => {
    //Parametros
    let parametros = useParams();
   
    let pelicula = getPelicula(parseInt(parametros.id));

  return (
    <section className={styles.contenedor__info}>
        <div className={styles.info__contenido}> 
        <img src={pelicula.poster} alt="" />
        <div className={styles.info__texto}>
            <p className={styles.info__texto}><span className={styles.texto__verde}>Titulo: </span>{pelicula.title}</p>
            <p className={styles.info__texto}><span className={styles.texto__verde}>Fecha: </span>{pelicula.date}</p>
            <p className={styles.info__texto}><span className={styles.texto__verde}>Puntuación: </span>{pelicula.vote_count}</p>
            <p className={styles.info__texto}><span className={styles.texto__verde}>Puntuación Media: </span>{pelicula.vote_average}</p>
            <p className={styles.info__texto}><span className={styles.texto__verde}>Resumen: </span>{pelicula.overview}</p>
        </div>
        </div>
        {/* Link a inicio  */}
        <Link to="/">
        <button className={styles.info__boton}>Volver</button>
        </Link>
    </section>
  )
}
