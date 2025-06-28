import React from "react";
import styles from "./pagePepeat003.module.css";
import CardDesign003 from "../pageDesing003/CardDesign003";

const PageRepeat003 = () => {
  const cantidad = 5;
  return (
    <div className={styles.contain}>
      {Array.from({ length: cantidad }).map((_, index) => (
        <CardDesign003 key={index} />
      ))}
    </div>
  );
};

export default PageRepeat003;
