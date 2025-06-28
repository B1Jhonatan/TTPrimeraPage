import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBarComponent = ({ linkPage, nombreElemento }) => {
  return (
    <div>
      <Link to={`/${linkPage}`} className={style.NavBar}>
        {nombreElemento}
      </Link>
    </div>
  );
};

export default NavBarComponent;
