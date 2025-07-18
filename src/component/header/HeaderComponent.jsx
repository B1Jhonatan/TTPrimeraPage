import NavBar from "./NavBarComponent";
import style from "./Header.module.css";

const HeaderComponent = () => {
  return (
    <div className={style.contain}>
      <div>
        <h1 className={style.nav}>Navegacion</h1>
      </div>
      <div>
        <NavBar linkPage="" nombreElemento="Home" />
        <NavBar linkPage="design001" nombreElemento="Design 001" />
        <NavBar linkPage="design002" nombreElemento="Design 002" />
        <NavBar linkPage="design003" nombreElemento="Design 003" />
        <NavBar linkPage="design004" nombreElemento="Design 004" />
        <NavBar linkPage="repeat002" nombreElemento="Design repeat 002" />
        <NavBar linkPage="repeat003" nombreElemento="Design repeat 003" />
        <NavBar linkPage="repeat004" nombreElemento="Design repeat 004" />
        <NavBar linkPage="hate-onion" nombreElemento="Onion hate" />
        <NavBar linkPage="zoologico" nombreElemento="Zoologico" />
        <NavBar linkPage="gabinete" nombreElemento="Gabinete" />
        <NavBar linkPage="ventas" nombreElemento="Ventas" />
        <NavBar linkPage="universidad" nombreElemento="Universidad" />
        <NavBar linkPage="sql/esquema" nombreElemento="SQL" />
        <NavBar linkPage="todo" nombreElemento="Todo" />
      </div>
    </div>
  );
};

export default HeaderComponent;
