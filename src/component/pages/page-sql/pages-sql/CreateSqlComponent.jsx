import React from "react";
import ImageComponent from "../../../image/ImageComponent";
import styles from "./SqlC.module.css";

const CreateSqlComponent = () => {
  return (
    <div>
      <div className={styles.descripcion}>
        <h2 className={styles.text}>Cantidades de obra</h2>
        <strong className={styles.text}>Jhonatan Jaimes</strong>
      </div>
      <ImageComponent
        linkImg={"/sql001.png"}
        nombre={"ssql"}
        css={styles.contain}
      />
    </div>
  );
};

export default CreateSqlComponent;
