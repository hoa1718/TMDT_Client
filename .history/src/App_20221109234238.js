import Home from "./page/Home";
import SanPham_Detail from "./page/SanPham_Detail";
import Login from "./page/Login"
import User from "./page/User"
import ScrollToTop from "./component/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/main.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/price-range.css";
import "./css/responsive.css";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh>
        <ScrollToTop>
          <Routes>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route
              path="/SanPham/:id"
              element={<SanPham_Detail></SanPham_Detail>}
            ></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/User/:id" element={<User></User>}></Route>
            <Route path="/Bills/:id" element={<User></User>}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
