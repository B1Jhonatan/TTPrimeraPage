import React from "react";
import ImageComponent from "../image/ImageComponent";

const StartsComponent = ({ cantidad, css, cssIcon }) => {
  return (
    <div className={css}>
      {Array.from({ length: cantidad }).map((_, index) => (
        <ImageComponent
          key={index}
          linkImg="../public/star.png"
          nombre={"Star" + index}
          css={cssIcon}
        />
      ))}
    </div>
  );
};

export default StartsComponent;
