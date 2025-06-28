import React from "react";
import CardDesign002 from "../pageDesing002/CardDesign002";
import styles from "./pageRepeat002.module.css";

const PageRepeat002 = () => {
  const cantidad = 5;
  return (
    <div className={styles.contain}>
      {Array.from({ length: cantidad }).map((_, index) => (
        <CardDesign002 key={index} />
      ))}
    </div>
  );
};

export default PageRepeat002;
