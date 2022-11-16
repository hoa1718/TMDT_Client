import Header from "../component/Header";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState } from "react";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
function Cart() {
  ReactSession.setStoreType("localStorage");
  const [items, setItems] = useState(ReactSession.get("cart"));
  const displayCart = (list) => {
    if (list === undefined) return;
    return Object.keys(list).map((item) => {
      return (
        <tr key={item}>
          <td className="cart_product">
            <Link>
              <ImageFromFireBase id={items[item].IdSanPham} />
            </Link>
          </td>
          <td className="cart_description">
            <h4>
              <Link>{items[item].Ten[0]}</Link>
            </h4>
            <p>ID: {items[item].IdSanPham}</p>
          </td>
          <td className="cart_price">
            <p>{formatter.format(Number(items[item].GiaNhap * 1.4))}</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <button
                className="cart_quantity_up"
                onClick={(e, item) =>{plusQuantity(e, item)}}
              >
                {" "}
                +{" "}
              </button>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                defaultValue={items[item].Quantity}
                autoComplete="off"
                size={2}
              />
              <button
                className="cart_quantity_down"
                onClick={(e, item) => minusQuantity(e, item)}
              >
                {" "}
                -{" "}
              </button>
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">
              {formatter.format(
                Number(items[item].GiaNhap * items[item].Quantity * 1.4)
              )}
            </p>
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
  const plusQuantity = (e, i) => {
    const input = e.target.nextElementSibling;
    const value = Number(input.value);
    setItems(() => {
      const temp = [...items];
      temp.Quantity=value+1;
      return temp;
    });
    input.value = Number(value) + 1;
  };
  const minusQuantity = (e, i) => {
    const input = e.target.previousElementSibling;
    const value = Number(input.value);

    if (value <= 1) return;
    input.value = Number(value) - 1;
  };
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
              <tbody>{displayCart(items)}</tbody>
            </table>
          </div>
        </div>
      </section>{" "}
      {/*/#cart_items*/}
    </>
  );
}
export default Cart;
