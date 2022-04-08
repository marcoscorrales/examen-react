import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Pelis.module.css';
export const TarjetaPeli = (prop) => {
    
  return (
    <div className={styles.tarjeta__peli}>
         {/* El link nos envia a ShowPeli con el id de la pelicula */}
        <Link className={styles.link} to= {"/pelis/"+prop.id}>
        <img className={styles.img} src={prop.img} alt="" />
        {prop.nombre}
        </Link>
    </div>

  )
}
