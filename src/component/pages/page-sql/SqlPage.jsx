import HeadreSqlComponent from "../../header/HeadreSqlComponent";
import { Route, Routes } from "react-router-dom";
import CreateSqlComponent from "./pages-sql/CreateSqlComponent";
import SqlCreateComponent from "./page-creacion/SqlCreateComponent";

const SqlPage = () => {
  return (
    <div>
      <HeadreSqlComponent />
      <Routes>
        <Route path="/esquema" element={<CreateSqlComponent />} />
        <Route path="/crear" element={<SqlCreateComponent />} />
      </Routes>
    </div>
  );
};

export default SqlPage;
