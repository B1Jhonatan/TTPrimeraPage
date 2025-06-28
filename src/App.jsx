import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./component/header/HeaderComponent.jsx";
import HomeComponent from "./component/pages/home/HomeComponent.jsx";
import PageDesing001 from "./component/pages/pageDesing001/PageDesing001.jsx";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/desing001" element={<PageDesing001 />} />
      </Routes>
    </div>
  );
}

export default App;
