import { Link } from "react-router-dom";
import logo from "../logo.png";
import { useState } from "react";
import { ReactSession } from 'react-client-session';
function Header() {
  ReactSession.setStoreType("localStorage");
  const [user,setUser]= useState(ReactSession.get("user"))
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
                <a href="index.html">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/Login">
                      <i className="fa fa-user" /> {user===null ? user.TenKhachHang: Tài khoản
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-star" /> Yêu thích
                    </a>
                  </li>
                  <li>
                    <a href="checkout.html">
                      <i className="fa-solid fa-code-compare"></i> So sánh
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="fa fa-shopping-cart" /> Giỏ hàng
                    </a>
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
                    <a href="index.html" className="active">
                      Trang chủ
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Sản phẩm</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">Thể loại
                    <i className="fa fa-angle-down" /></a>
                    
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      Hãng
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
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
