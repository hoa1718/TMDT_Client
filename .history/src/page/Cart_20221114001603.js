import logo from "../logo.png";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
function Cart() {
  ReactSession.setStoreType("localStorage");
  const displayCart = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <tr>
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
              <a className="cart_quantity_up" href>
                {" "}
                +{" "}
              </a>
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                defaultValue={1}
                autoComplete="off"
                size={2}
              />
              <a className="cart_quantity_down" href>
                {" "}
                -{" "}
              </a>
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
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>{" "}
      {/*/#cart_items*/}
    </>
  );
}
export default Cart;
