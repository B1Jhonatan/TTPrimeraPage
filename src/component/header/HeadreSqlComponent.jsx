import React from "react";
import NavBar from "./NavBarComponent";
import styles from "./Header.module.css";

const HeadreSqlComponent = () => {
  return (
    <section className={styles.containSql}>
      <NavBar linkPage="sql/esquema" nombreElemento="Esquema" />
      <NavBar linkPage="crear" nombreElemento="Creacion schema" />
      <NavBar linkPage="insercion" nombreElemento="Insertar datos" />
      <NavBar linkPage="leer" nombreElemento="Leer datos" />
      <NavBar linkPage="actualizar" nombreElemento="Actualizar datos" />
      <NavBar linkPage="borrar" nombreElemento="Borrar datos" />
    </section>
  );
};

export default HeadreSqlComponent;
