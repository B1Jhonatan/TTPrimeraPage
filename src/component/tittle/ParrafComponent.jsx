import React from "react";

const ParrafComponent = ({ texto, css }) => {
  return (
    <div className={css}>
      <p>{texto}</p>
    </div>
  );
};

export default ParrafComponent;
