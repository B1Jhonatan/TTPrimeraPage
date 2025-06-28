import React from "react";
import ParrafComponent from "../../tittle/ParrafComponent";
import ImageComponent from "../../image/ImageComponent";
import TitleComponent from "../../tittle/TitleComponent";
import ButtonComponent from "../../button/ButtonComponent";
import style from "./CardDesign003.module.css";

const CardDesign003 = () => {
  return (
    <div className={style.contain}>
      <ImageComponent
        linkImg="../public/p-higienico.jpg"
        name="papel higienico"
        css={style.img}
      />
      <div className={style.nameContain}>
        <TitleComponent tittle="SINGLE TOILET ROLL" css={style.nameProd} />
        <TitleComponent tittle="POPULAR SELLER" css={style.nameEspe} />
      </div>
      <TitleComponent tittle="$9.99" css={style.nameMoney} />
      <ParrafComponent
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia eos minima ea provident aperiam, modi id nemo aspernatur distinctio et. Ducimus ratione dolore facilis id nostrum nobis suscipit debitis."
        css={style.parraf}
      />
      <div className={style.botonContain}>
        <ButtonComponent nombreBoton="Read more" css={style.boton} />
        <ButtonComponent nombreBoton="Contact" css={style.boton} />
      </div>
    </div>
  );
};

export default CardDesign003;
