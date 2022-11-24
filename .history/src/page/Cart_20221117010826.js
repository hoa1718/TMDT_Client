import Header from "../component/Header";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState } from "react";
import formatter from "../changeCurrency";
import Cart_Table from "../component/Cart";
function Cart() {
  ReactSession.setStoreType("localStorage");
  const [point, setPoint] = useState(0);
  const changeTotal=async ()=>{
    let temp = 0;
    if (ReactSession.get("cart") === undefined) {
      return temp;
    }
    ReactSession.get("cart").forEach((item, i) => {
      temp += item.Quantity * (item.GiaNhap * 1.4);
    });
    return Number(temp);
  }
  const [total, setTotal] = useState();
  
  return (
    <>
      <Header></Header>
      <Cart_Table
        setT={() =>
          setTotal(() => {
            let temp = 0;
            if (ReactSession.get("cart") === undefined) {
              return temp;
            }
            ReactSession.get("cart").forEach((item, i) => {
              temp += item.Quantity * (item.GiaNhap * 1.4);
            });
            return temp;
          })
        }
      ></Cart_Table>

      <section id="do_action">
        <div className="container">
          <div className="row">
            {ReactSession.get("user") && (
              <div className="col-sm-6">
                <div className="chose_area">
                  <ul className="user_info">
                    <li className="single_field zip-field">
                      <label>
                        Điểm thưởng:(Hiện có{" "}
                        {ReactSession.get("user").DiemThuong})
                      </label>
                      <input
                        type="number"
                        max={ReactSession.get("user").DiemThuong}
                        id="point"
                      />
                    </li>
                  </ul>
                  <button
                    className="btn btn-default update"
                    onClick={() => {
                      setPoint(() => {
                        const point = document.querySelector("#point").value;
                        if (point > ReactSession.get("user").DiemThuong) {
                          alert("Mời nhập lại");
                        }
                        return Number(point);
                      });
                    }}
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            )}

            <div className="col-sm-6 pull-right">
              <div className="total_area ">
                <ul>
                  <li>
                    Tổng cộng<span>{formatter.format(total)}</span>
                  </li>
                  <li>
                    Giảm giá<span>{formatter.format(point * 10000)}</span>
                  </li>
                  <li>
                    Shipping Cost <span>Free</span>
                  </li>
                  <li>
                    Thanh toán{" "}
                    <span>{formatter.format(total - point * 10000)}</span>
                  </li>
                </ul>
                <Link
                  className="btn btn-default check_out"
                  to="/Checkout"
                  state={{ point: point, total: total }}
                >
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/#do_action*/}
    </>
  );
}
export default Cart;
