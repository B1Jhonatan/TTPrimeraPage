import React from "react";

export const BotonComponent = ({ onClick, name, css }) => {
  return (
    <button className={css} onClick={onClick}>
      {name}
    </button>
  );
};
