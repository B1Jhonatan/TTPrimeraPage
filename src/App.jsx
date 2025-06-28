import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./component/header/HeaderComponent.jsx";
import HomeComponent from "./component/pages/HomeComponent.jsx";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
