import React from "react";
import styles from "../Sql.module.css";
import ImageComponent from "../../../image/ImageComponent";

const SqlUpdateComponent = () => {
  return (
    <div className={styles.containG}>
      <div className={styles.imgRead}>
        <ImageComponent linkImg={"/021update1.png"} css={styles.imgI} />
      </div>
      <div className={styles.imgRead}>
        <ImageComponent linkImg={"/021update2.png"} css={styles.imgI} />
      </div>
    </div>
  );
};

export default SqlUpdateComponent;
