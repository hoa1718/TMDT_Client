import logo from "../logo.png";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
function Cart() {
  ReactSession.setStoreType("localStorage");
  const displayCart=(list)=>{
    return Object.keys(list).map((item, i) => {
        return(

        )
    })
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
