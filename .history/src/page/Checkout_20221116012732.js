import Header from "../component/Header";
function Checkout() {
  return (
    <>
      <Header></Header>
      <section id="cart_items">
        <div className="container">     
          <div className="register-req">
            <button className="btn btn-primary" style={{marginTop:"0px"}}>Đăng nhập</button>
          </div>
          {/*/register-req*/}
          <div className="shopper-informations">
            <div className="row">
              <div className="col-sm-3">
                <div className="shopper-info">
                  <p>Shopper Information</p>
                  <form>
                    <input type="text" placeholder="Display Name" />
                    <input type="text" placeholder="User Name" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm password" />
                  </form>
                  <a className="btn btn-primary" href>
                    Get Quotes
                  </a>
                  <a className="btn btn-primary" href>
                    Continue
                  </a>
                </div>
              </div>
              
              <div className="col-sm-4">
                <div className="order-message">
                  <p>Shipping Order</p>
                  <textarea
                    name="message"
                    placeholder="Notes about your order, Special Notes for Delivery"
                    rows={16}
                    defaultValue={""}
                  />
                  <label>
                    <input type="checkbox" /> Shipping to bill address
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="review-payment">
            <h2>Review &amp; Payment</h2>
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
