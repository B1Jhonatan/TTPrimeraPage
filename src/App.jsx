import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./component/header/HeaderComponent.jsx";
import HomeComponent from "./component/pages/home/HomeComponent.jsx";
import PageDesing001 from "./component/pages/pageDesing001/PageDesing001.jsx";
import PageDesing002 from "./component/pages/pageDesing002/PageDesing002.jsx";

function App() {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/desing001" element={<PageDesing001 />} />
        <Route path="/desing002" element={<PageDesing002 />} />
      </Routes>
    </div>
  );
}

export default App;
