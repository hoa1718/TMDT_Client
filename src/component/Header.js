import { Link } from "react-router-dom";
import logo from "../logo.png";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
function Header() {
  ReactSession.setStoreType("localStorage");
  const [user, setUser] = useState(ReactSession.get("user"));
  const [hang, setHang] = useState([]);
  const [type, setType] = useState([]);
  const getHang = async () => {
    axios
      .get("https://tmdt-client.onrender.com/Hang/")
      .then(async (res) => {
        await setHang(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getType = async () => {
    axios
      .get("https://tmdt-client.onrender.com/PhanLoai/")
      .then(async (res) => {
        await setType(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const displayHang = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <li key={i}>
          <a onClick={() => {window.location.href="/SanPham/Hang/"+hang[item].IdHangSx}}>{hang[item].Ten}</a>
        </li>
      );
    });
  };
  const displayType = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <li key={i}>
          <a onClick={() => {window.location.href="/SanPham/TheLoai/"+type[item].TenLoai}}>{type[item].TenLoai}</a>
        </li>
      );
    });
  };
  useEffect(() => {
    getHang();
    getType();
  }, []);
  return (
    <header id="header">
      {/*header*/}
      <div className="header_top">
        {/*header_top*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <i className="fa fa-phone" /> 0908.888.888
                  </li>
                  <li>
                    <i className="fa fa-envelope" /> PHK@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header_top*/}
      <div className="header-middle">
        {/*header-middle*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="logo pull-left">
                <Link to="/Home">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    {user !== undefined ? (
                      <Link to={"/User/" + user.IdTaiKhoan}>
                        <i className="fa fa-user" /> {user.TenKhachHang}
                      </Link>
                    ) : (
                      <Link to="/Login">
                        <i className="fa fa-user" /> Tài khoản
                      </Link>
                    )}
                  </li>
                  <li>
                    <Link to="/YeuThich">
                    <i className="fa-solid fa-heart"></i> Yêu thích
                    </Link>
                  </li>
                  <li>
                    <Link >
                      <i className="fa-solid fa-code-compare"></i> So sánh
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Cart"}>
                      <i className="fa fa-shopping-cart" /> Giỏ hàng
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-middle*/}
      <div className="header-bottom">
        {/*header-bottom*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <Link to="/Home">Trang chủ</Link>
                  </li>
                  <li className="dropdown">
                    <Link to={"/SanPham"}>Sản phẩm</Link>
                  </li>
                  <li className="dropdown">
                    <p>
                      Thể loại
                      <i className="fa fa-angle-down" />
                    </p>
                    <ul role="menu" className="sub-menu">
                      {displayType(type)}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <p>
                      Hãng
                      <i className="fa fa-angle-down" />
                    </p>
                    <ul role="menu" className="sub-menu">
                      {displayHang(hang)}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/header-bottom*/}
    </header>
  );
}
export default Header;
