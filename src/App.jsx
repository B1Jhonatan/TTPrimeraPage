import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./component/header/HeaderComponent.jsx";
import HomeComponent from "./component/pages/home/HomeComponent.jsx";
import PageDesing001 from "./component/pages/pageDesing001/PageDesing001.jsx";
import PageDesing002 from "./component/pages/pageDesing002/PageDesing002.jsx";
import PageDesing003 from "./component/pages/pageDesing003/PageDesing003.jsx";
import PageDesing004 from "./component/pages/pageDesing004/PageDesing004.jsx";
import PageRepeat002 from "./component/pages/pageRepeat002/PageRepeat002.jsx";
import PageRepeat003 from "./component/pages/pageRepeat003/PageRepeat003.jsx";
import PageRepeat004 from "./component/pages/pageRepeat004/PageRepeat004.jsx";

function App() {
  return (
    <div className="containBody">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/design001" element={<PageDesing001 />} />
        <Route path="/design002" element={<PageDesing002 />} />
        <Route path="/design003" element={<PageDesing003 />} />
        <Route path="/design004" element={<PageDesing004 />} />
        <Route path="/repeat002" element={<PageRepeat002 />} />
        <Route path="/repeat003" element={<PageRepeat003 />} />
        <Route path="/repeat004" element={<PageRepeat004 />} />
      </Routes>
    </div>
  );
}

export default App;
