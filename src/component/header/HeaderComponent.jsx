import NavBar from "./NavBarComponent";
import style from "./Header.module.css";

const HeaderComponent = () => {
  return (
    <div className={style.contain}>
      <div>
        <h1>Trabajo Talento Tech</h1>
      </div>
      <div className={style.navContain}>
        <NavBar linkPage="" nombreElemento="Home" />
        <NavBar linkPage="desing001" nombreElemento="desing001" />
        <NavBar linkPage="desing002" nombreElemento="desing002" />
        <NavBar linkPage="desing003" nombreElemento="desing003" />
        <NavBar linkPage="desing004" nombreElemento="desing004" />
      </div>
    </div>
  );
};

export default HeaderComponent;
