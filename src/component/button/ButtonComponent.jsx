import React from "react";

const ButtonComponent = ({ nombreBoton, css }) => {
  return (
    <div>
      <button className={css}>{nombreBoton}</button>
    </div>
  );
};

export default ButtonComponent;
