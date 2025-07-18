import React from "react";
import ImageComponent from "../../../image/ImageComponent";
import styles from "../Sql.module.css";

const SqlReadComponent = () => {
  return (
    <div className={styles.imgRead}>
      <ImageComponent linkImg={"/020read.png"} css={styles.imgI} />
      <ImageComponent linkImg={"/020consulta.png"} css={styles.imgI} />
    </div>
  );
};

export default SqlReadComponent;
