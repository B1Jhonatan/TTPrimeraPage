import React from "react";

export const BotonComponent = ({ onClick, name }) => {
  return <button onClick={onClick}>{name}</button>;
};
