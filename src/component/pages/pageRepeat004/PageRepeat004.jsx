import React, { useState } from "react";
import CardDesign004 from "../pageDesing004/CardDesign004";
import styles from "./pageRepeat004.module.css";

const PageRepeat004 = () => {
  const [cantidad, setCantidad] = useState(5);

  const handleClick = () => {
    const valor = document.getElementById("iCantidad").value;
    setCantidad(valor);
  };

  return (
    <div className={styles.contain}>
      {Array.from({ length: cantidad }).map((_, index) => (
        <CardDesign004 key={index} />
      ))}
      <div>
        <input
          id="iCantidad"
          type="Text"
          placeholder="Cuantos marcadores quiere"
        />
        <button onClick={handleClick}>Valor</button>
      </div>
    </div>
  );
};

export default PageRepeat004;
