import React from "react";
import CardImgComponent from "../../../image/CardImgComponent";
import styles from "./SqlCreate.module.css";

const SqlCreateComponent = () => {
  return (
    <div className={styles.contain}>
      <CardImgComponent nombre={"Usuarios"} scr={"/001usuarios.png"} />
      <CardImgComponent nombre={"Proyectos"} scr={"/002proyectos.png"} />
      <CardImgComponent nombre={"Fecha"} scr={"/003fecha.png"} />
      <CardImgComponent nombre={"Descripcion"} scr={"/004descripcion.png"} />
      <CardImgComponent nombre={"Tipos"} scr={"/005tipos.png"} />
      <CardImgComponent nombre={"Elementos"} scr={"/006elementos.png"} />
      <CardImgComponent nombre={"Areas"} scr={"/007areas.png"} />
      <CardImgComponent nombre={"Precio total"} scr={"/008precio-total.png"} />
      <CardImgComponent nombre={"Medidas"} scr={"/009medidas.png"} />
      <CardImgComponent nombre={"Largo"} scr={"/010largo.png"} />
      <CardImgComponent nombre={"Ancho"} scr={"/011ancho.png"} />
      <CardImgComponent nombre={"Alto"} scr={"/012alto.png"} />
      <CardImgComponent
        nombre={"Precio unitario"}
        scr={"/013precio-unitario.png"}
      />
      <CardImgComponent nombre={"Material"} scr={"/014material.png"} />
      <CardImgComponent nombre={"Materiales"} scr={"/015materiales.png"} />
      <CardImgComponent nombre={"Cemento"} scr={"/016cemento.png"} />
      <CardImgComponent nombre={"Arena"} scr={"/017arena.png"} />
      <CardImgComponent nombre={"Grava"} scr={"/018grava.png"} />
      <CardImgComponent nombre={"Agua"} scr={"/019agua.png"} />
    </div>
  );
};

export default SqlCreateComponent;
