import React from "react";
import ImageComponent from "./ImageComponent";
import styles from "./CardImg.module.css";

const CardImgComponent = ({ nombre, scr }) => {
  return (
    <div className={styles.cardImg}>
      <ImageComponent linkImg={scr} nombre={nombre} css={styles.img} />
      <strong>{nombre}</strong>
    </div>
  );
};

export default CardImgComponent;
