import React from "react";

const TitleComponent = ({ tittle, css }) => {
  return (
    <div className={css}>
      <h2>{tittle}</h2>
    </div>
  );
};

export default TitleComponent;
