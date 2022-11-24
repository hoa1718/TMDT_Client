import Header from "../component/Header";
import { useLocation } from "react-router-dom";
import Cart from "../component/Cart";
function Checkout() {
  const location = useLocation();
  const point = location.state.point;
  const total = location.state.total;
  return (
    <>
      <Header></Header>
      <section id="cart_items">
        <div className="container">
          <div className="register-req">
            <button className="btn btn-primary" style={{ marginTop: "0px" }}>
              Đăng nhập
            </button>
          </div>
          {/*/register-req*/}
          <div className="shopper-informations">
            <div className="row">
              <div className="col-sm-4">
                <div className="shopper-info">
                  <p>Shopper Information</p>
                  <form>
                    <input type="text" placeholder="Họ tên người nhận" />
                    <input type="text" placeholder="Số điện thoại" />
                    <input type="text" placeholder="Địa chỉ"></input>
                    <select type="text" placeholder="Địa chỉ">
                      <option hidden value>
                        ---
                      </option>
                      <option value>TP.HCM</option>
                    </select>
                    <select type="text" placeholder="Địa chỉ">
                      <option hidden value>
                        ---
                      </option>
                      <option value>TP.HCM</option>
                    </select>
                    <select type="text" placeholder="Địa chỉ">
                      <option hidden value>
                        ---
                      </option>
                      <option value>TP.HCM</option>
                    </select>
                  </form>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="order-message">
                  <p>Hình thức thanh toán</p>
                  <div className="radio_wrapper">
                    <input type={"radio"} name="paymentMethod"></input>{" "}
                    <span>Thanh toán trực tuyến</span>
                  </div>
                  <div className="radio_wrapper">
                    <input type={"radio"} name="paymentMethod"></input>{" "}
                    <span>Thanh toán qua Bank</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="order-message pay" style={{background:"#fafafa",padding:"0px 10px",borderRadius:"5px"}}>
                  <p style={{color:"black"}}>Thanh toán</p>
                  <hr className="solid" style={{background:"black"}}/>
                  <div>
                    <span>Tạm tính:</span>
                    <span className="pull-right">100</span>
                  </div>
                  <div>
                    <span>Tạm tính:</span>
                    <span className="pull-right">100</span>
                  </div>
                  <hr className="solid" style={{background:"black"}}/>
                  <div>
                    <span style={{fontSize:"20px"}}>Tổng cộng:</span>
                    <span style={{fontSize:"20px",color:"#fe980f"}} className="pull-right">100</span>
                  </div>
                  <button className="btn btn-primary pull-right" style={{fontSize:"20px",borderRadius:"5px"}}>
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="review-payment">
            <h2>Giỏ hàng</h2>
          </div>
          <Cart></Cart>
          <div className="payment-options">
            <span>
              <label>
                <input type="checkbox" /> Direct Bank Transfer
              </label>
            </span>
            <span>
              <label>
                <input type="checkbox" /> Check Payment
              </label>
            </span>
            <span>
              <label>
                <input type="checkbox" /> Paypal
              </label>
            </span>
          </div>
        </div>
      </section>{" "}
      {/*/#cart_items*/}
    </>
  );
}
export default Checkout;
