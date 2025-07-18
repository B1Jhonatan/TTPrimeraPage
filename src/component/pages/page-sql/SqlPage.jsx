import React from "react";
import HeadreSqlComponent from "../../header/HeadreSqlComponent";
import { Route, Routes } from "react-router-dom";
import CreateSqlComponent from "./pages-sql/CreateSqlComponent";

const SqlPage = () => {
  return (
    <div>
      <HeadreSqlComponent />
      <Routes>
        <Route path="/esquema" element={<CreateSqlComponent />} />
      </Routes>
    </div>
  );
};

export default SqlPage;
