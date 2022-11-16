import Header from "../component/Header";
function Checkout() {
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
                  <button className="btn btn-primary" href>
                    Đặt hàng
                  </button>
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
                <div>
                    
                </div>
              </div>
            </div>
          </div>
          <div className="review-payment">
            <h2>Giỏ hàng</h2>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">Item</td>
                  <td className="description" />
                  <td className="price">Price</td>
                  <td className="quantity">Quantity</td>
                  <td className="total">Total</td>
                  <td />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="images/cart/one.png" alt />
                    </a>
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
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="images/cart/two.png" alt />
                    </a>
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
                <tr>
                  <td className="cart_product">
                    <a href>
                      <img src="images/cart/three.png" alt />
                    </a>
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
                <tr>
                  <td colSpan={4}>&nbsp;</td>
                  <td colSpan={2}>
                    <table className="table table-condensed total-result">
                      <tbody>
                        <tr>
                          <td>Cart Sub Total</td>
                          <td>$59</td>
                        </tr>
                        <tr>
                          <td>Exo Tax</td>
                          <td>$2</td>
                        </tr>
                        <tr className="shipping-cost">
                          <td>Shipping Cost</td>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>
                            <span>$61</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
