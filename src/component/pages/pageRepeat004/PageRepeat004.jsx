import React from "react";
import CardDesign004 from "../pageDesing004/CardDesign004";
import styles from "./pageRepeat004.module.css";

const PageRepeat004 = () => {
  const cantidad = 10;
  return (
    <div className={styles.contain}>
      {Array.from({ length: cantidad }).map((_, index) => (
        <CardDesign004 key={index} />
      ))}
    </div>
  );
};

export default PageRepeat004;
