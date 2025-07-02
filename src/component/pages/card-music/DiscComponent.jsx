import React from "react";

export const DiscComponent = ({ tituloAlbum, year }) => {
  return (
    <div>
      <strong>{tituloAlbum}</strong>
      <p>{year}</p>
    </div>
  );
};
