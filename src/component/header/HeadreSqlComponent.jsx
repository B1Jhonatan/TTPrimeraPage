import React from "react";
import NavBar from "./NavBarComponent";
import styles from "./Header.module.css";

const HeadreSqlComponent = () => {
  return (
    <section className={styles.containSql}>
      <NavBar linkPage="sql/esquema" nombreElemento="Esquema" />
      <NavBar linkPage="sql/crear" nombreElemento="Creacion schema" />
      <NavBar linkPage="sql/insercion" nombreElemento="Insertar datos" />
      <NavBar linkPage="sql/leer" nombreElemento="Leer datos" />
      <NavBar linkPage="sql/actualizar" nombreElemento="Actualizar datos" />
      <NavBar linkPage="sql/borrar" nombreElemento="Borrar datos" />
    </section>
  );
};

export default HeadreSqlComponent;
