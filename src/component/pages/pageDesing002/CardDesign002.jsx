import style from "./CardDesign002.module.css";
import ImageComponent from "../../image/ImageComponent";
import StartsComponent from "../../starts/StartsComponent";
import TitleComponent from "../../tittle/TitleComponent";
import ParrafComponent from "../../tittle/ParrafComponent";
import ButtonComponent from "../../button/ButtonComponent";

const CardDesign002 = () => {
  return (
    <div className={style.contain}>
      <ImageComponent
        linkImg="../public/c-constructor.png"
        name="iConstructor"
        css={style.imgPicture}
      />
      <TitleComponent tittle="Jhonatan Jaimes" css={style.tituloPerf} />
      <StartsComponent
        cantidad={5}
        css={style.starsContain}
        cssIcon={style.starsImg}
      />

      <ParrafComponent
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia eos minima ea provident aperiam, modi id nemo aspernatur distinctio et. Ducimus ratione dolore facilis id nostrum nobis suscipit debitis."
        css={style.parraf}
      />
      <div className={style.botonesContain}>
        <ButtonComponent nombreBoton="Read more" css={style.botones} />
        <ButtonComponent nombreBoton="Contact" css={style.botones} />
      </div>
    </div>
  );
};

export default CardDesign002;
