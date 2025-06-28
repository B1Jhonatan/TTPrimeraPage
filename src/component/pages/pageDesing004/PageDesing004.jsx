import React from "react";
import ImageComponent from "../../image/ImageComponent";
import TitleComponent from "../../tittle/TitleComponent";
import ParrafComponent from "../../tittle/ParrafComponent";
import styles from "./PageDesing004.module.css";

const PageDesing004 = () => {
  return (
    <div className={styles.sContain}>
      <div className={styles.contain}>
        <div className={styles.conImg}>
          <ImageComponent
            linkImg="../public/qr.png"
            nombre="qr"
            css={styles.img}
          />
        </div>
        <TitleComponent
          tittle="Improve your front-end skills by building projects"
          css={styles.titulo}
        />
        <ParrafComponent
          texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos hic adipisci quaerat! Aliquid eius quasi repudiandae similique. Hic consequatur recusandae reprehenderit veniam laboriosam saepe iste eum expedita molestiae veritatis?"
          css={styles.parraf}
        />
      </div>
    </div>
  );
};

export default PageDesing004;
