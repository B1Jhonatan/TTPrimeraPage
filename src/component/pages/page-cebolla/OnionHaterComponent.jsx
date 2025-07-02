import React, { useState } from "react";
import { Clock } from "./Clock";
import { BotonesCardComponent } from "../card-music/BotonesCardComponent";
import { CardComponent } from "../card-music/CardComponent";

export const OnionHaterComponent = () => {
  const [valor, setValor] = useState(0);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    if (e.target.value.toLowerCase().includes("cebolla")) {
      alert("Odio la cebolla");
    }
    let texto = e.target.value;
    setText(texto);
  };

  const handleSuma = () => {
    setValor(valor + 1);
  };

  const handleResta = () => {
    if (valor > 0) {
      setValor(valor - 1);
    } else {
      return valor;
    }
  };

  return (
    <div>
      <textarea
        name="onionHater"
        id="onionHater"
        onChange={handleChange}
      ></textarea>
      <h2>Contador</h2>
      <p>Valor: {valor}</p>
      <button onClick={handleSuma}>Sumar 1</button>
      <button onClick={handleResta}>Restar 1</button>
      <p>{text}</p>
      <Clock />
      <CardComponent />
    </div>
  );
};
