import HeadreSqlComponent from "../../header/HeadreSqlComponent";
import { Route, Routes } from "react-router-dom";
import CreateSqlComponent from "./pages-sql/CreateSqlComponent";
import SqlCreateComponent from "./page-creacion/SqlCreateComponent";
import SqlInsertComponent from "./page-insert/SqlInsertComponent";
import SqlReadComponent from "./page-leer/SqlReadComponent";
import SqlUpdateComponent from "./page-update/SqlUpdateComponent";

const SqlPage = () => {
  return (
    <div>
      <HeadreSqlComponent />
      <Routes>
        <Route path="/esquema" element={<CreateSqlComponent />} />
        <Route path="/crear" element={<SqlCreateComponent />} />
        <Route path="/insercion" element={<SqlInsertComponent />} />
        <Route path="/leer" element={<SqlReadComponent />} />
        <Route path="/actualizar" element={<SqlUpdateComponent />} />
      </Routes>
    </div>
  );
};

export default SqlPage;
