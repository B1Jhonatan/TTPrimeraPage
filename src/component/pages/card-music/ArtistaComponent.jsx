import React from "react";

export const ArtistaComponent = ({ artista, tipo }) => {
  return (
    <div>
      <h1>{artista}</h1>
      <p>{tipo}</p>
    </div>
  );
};
