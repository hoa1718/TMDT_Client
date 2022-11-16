import logo from "../logo.png";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState } from "react";
import ImageFromFireBase from "./ImgFirebase.js";
function Cart() {
  ReactSession.setStoreType("localStorage");
  const[items,setItems]=useState(ReactSession.get("cart"));
  const displayCart = (list) => {
    if(list===undefined) return;
    return Object.keys(list).map((item, i) => {
      return (
        <tr key={i}>
          <td className="cart_product">
            <Link>
              <img src={logo} alt="item" />
            </Link>
          </td>
          <td className="cart_description">
            <h4>
              <a href>Colorblock Scuba</a>
            </h4>
            <p>Web ID: 1089772</p>
          </td>
          <td className="cart_price">
            <p>$59</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <button className="cart_quantity_up" onClick={(e)=> plusQuantity(e)} >
                {" "}
                +{" "}
              </button>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                defaultValue={1}
                autoComplete="off"
                size={2}
                min={1}
              />
              <button className="cart_quantity_down"  onClick={(e)=> minusQuantity(e)}>
                {" "}
                -{" "}
              </button>
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">$59</p>
          </td>
          <td className="cart_delete">
            <a className="cart_quantity_delete" href>
              <i className="fa fa-times" />
            </a>
          </td>
        </tr>
      );
    });
  };
  const plusQuantity=(e)=>{
    const input= e.target.nextElementSibling;
    const value=input.value;
    input.value=Number(value)+1;
  }
  const minusQuantity=(e)=>{
    const input= e.target.previousElementSibling;
    const value=input.value;
    if(value<=1) return;
    input.value=Number(value)-1;
  }
  return (
    <>
      <Header></Header>
      <section id="cart_items">
        <div className="container">
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Sản phẩm</td>
                  <td className="description" />
                  <td className="price">Đơn giá</td>
                  <td className="quantity">Số lượng</td>
                  <td className="total">Tổng</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                {displayCart(items)}
              </tbody>
            </table>
          </div>
        </div>
      </section>{" "}
      {/*/#cart_items*/}
    </>
  );
}
export default Cart;
