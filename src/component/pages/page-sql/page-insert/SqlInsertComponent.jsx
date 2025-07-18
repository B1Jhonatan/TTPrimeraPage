import React from "react";
import styles from "../Sql.module.css";
import CardImgComponent from "../../../image/CardImgComponent";

const SqlInsertComponent = () => {
  return (
    <div className={styles.contain}>
      <CardImgComponent nombre={"Usuarios"} scr={"/001usuariosi.png"} />
      <CardImgComponent nombre={"Proyectos"} scr={"/002proyectosi.png"} />
      <CardImgComponent nombre={"Fecha"} scr={"/008fechai.png"} />
      <CardImgComponent nombre={"Descripcion"} scr={"/009descripcioni.png"} />
      <CardImgComponent nombre={"Elementos"} scr={"/003tiposi.png"} />
      <CardImgComponent nombre={"Medidas"} scr={"/004medidasi.png"} />
      <CardImgComponent nombre={"Largo"} scr={"/005largoi.png"} />
      <CardImgComponent nombre={"Ancho"} scr={"/006anchoi.png"} />
      <CardImgComponent nombre={"Alto"} scr={"/007altoi.png"} />
    </div>
  );
};

export default SqlInsertComponent;
