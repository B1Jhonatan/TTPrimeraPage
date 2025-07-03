import React, { useState } from "react";
import CardDesign004 from "../pageDesing004/CardDesign004";
import styles from "./pageRepeat004.module.css";

const PageRepeat004 = () => {
  const [cantidad, setCantidad] = useState(5);

  const handleClick = () => {
    const valor = document.getElementById("iCantidad").value;
    setCantidad(valor);
  };

  const handleChange = (e) => {
    const num = e.target.value;
    setCantidad(num);
  };

  return (
    <div>
      <div>
        <input
          id="iCantidad"
          type="Text"
          placeholder="Cuantos marcadores quiere"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Valor</button>
      </div>
      <div className={styles.contain}>
        {Array.from({ length: cantidad }).map((_, index) => (
          <CardDesign004 key={index} />
        ))}
      </div>
    </div>
  );
};

export default PageRepeat004;
