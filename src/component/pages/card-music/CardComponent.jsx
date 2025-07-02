import React from "react";
import { ArtistaComponent } from "./ArtistaComponent";
import { DiscComponent } from "./DiscComponent";
import { BotonesCardComponent } from "./BotonesCardComponent";
import styles from "./Card.module.css";

export const CardComponent = () => {
  return (
    <div className={styles.contain}>
      <img
        className={styles.imgAl}
        src="https://img.freepik.com/fotos-premium/maos-com-musica-de-vinil-record-player_53876-45303.jpg"
        alt="album"
      />
      <div className={styles.div}>
        <ArtistaComponent artista="Rozes" tipo="Solista" />
        <DiscComponent tituloAlbum="Under the grave" year="2016" />
        <BotonesCardComponent />
      </div>
    </div>
  );
};
