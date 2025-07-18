import React from "react";
import styles from "../Sql.module.css";
import ImageComponent from "../../../image/ImageComponent";

export const SqlDeleteComponent = () => {
  return (
    <div className={styles.containG}>
      <div className={styles.imgRead}>
        <ImageComponent linkImg={"/022delete2.png"} css={styles.imgI} />
      </div>
      <div className={styles.imgRead}>
        <ImageComponent linkImg={"/022delete1.png"} css={styles.imgI} />
      </div>
    </div>
  );
};
