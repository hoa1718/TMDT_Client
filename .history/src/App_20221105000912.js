import Home from "./page/Home";
import SanPham_Detail from "./page/SanPham_Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/main.css'
import './css/bootstrap.min.css'
import './css/animate.css'
import './css/price-range.css'
import './css/responsive.css'
import Footer from './component/Footer'
o
function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh>
        
        <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/SanPham/:id" element={<SanPham_Detail></SanPham_Detail>} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
