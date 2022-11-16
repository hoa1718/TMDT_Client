import Home from "./page/Home";
import SanPham_ from "./page/SanPham_";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/main.css'
import './css/bootstrap.min.css'
import './css/animate.css'
import './css/price-range.css'
import './css/responsive.css'
import Footer from './component/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/SanPham/:id" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
