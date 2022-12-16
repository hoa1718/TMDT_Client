import Home from "./page/Home";
import SanPham_Detail from "./page/SanPham_Detail";
import Login from "./page/Login";
import User from "./page/User";
import Bills from "./page/Bills";
import Bills_Detail from "./page/Bills_Detail";
import ScrollToTop from "./component/ScrollToTop";
import SanPham from "./page/SanPham";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Favorite from "./page/Favorite";
import UserInfor from "./page/User_Infor";
import Password from "./page/Password";
import Address from "./page/Address";
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
          <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/SanPham" element={<SanPham></SanPham>}></Route>
            <Route
              path="/SanPham/:id"
              element={<SanPham_Detail></SanPham_Detail>}
            ></Route>
            <Route path="/Bills" element={<Bills></Bills>}></Route>
            <Route
              path="/Bills/:id"
              element={<Bills_Detail></Bills_Detail>}
            ></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/User/:id" element={<User></User>}></Route>
            <Route path="/User/Information" element={<UserInfor></UserInfor>}></Route>
            <Route path="/User/Password" element={<Password></Password>}></Route>
            <Route path="/User/Address" element={<Address></Address>}></Route>
            <Route path="/Cart" element={<Cart>/</Cart>}></Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
            <Route path="/YeuThich" element={<Favorite></Favorite>}></Route>
            <Route path="/SanPham/Hang/:id" element={<SanPham></SanPham>}></Route>
            <Route path="/SanPham/Phim/:id" element={<SanPham></SanPham>}></Route>
            <Route path="/SanPham/TheLoai/:id" element={<SanPham></SanPham>}></Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
