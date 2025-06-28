import React from "react";
import ImageComponent from "../../image/ImageComponent";
import TitleComponent from "../../tittle/TitleComponent";
import ParrafComponent from "../../tittle/ParrafComponent";
import style from "./pageDesing001.module.css";

const PageDesing001 = () => {
  return (
    <>
      <TitleComponent tittle="404 not found" css={style.tittlePage} />
      <div className={style.containPage}>
        <ImageComponent
          linkImg="../public/e-pajaros.png"
          nombre="espanta-pajaros"
          css={style.imagen}
        />
        <div className={style.containText}>
          <TitleComponent
            tittle="I have bad news for you"
            css={style.tituloFound}
          />
          <ParrafComponent
            texto="The page you are loking for might be removed or is temporarily unavailable"
            css=""
          />
        </div>
      </div>
    </>
  );
};

export default PageDesing001;
