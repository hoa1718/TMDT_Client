import Header from "../component/Header";
import { useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
import { Link } from "react-router-dom";
import axios from "axios";
function Checkout() {
  const location = useLocation();
  const point = location.state.point;
  const total = location.state.total;
  const [items, setItems] = useState(ReactSession.get("cart"));
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const displayCart = (list) => {
    if (list === undefined) return;
    return Object.keys(list).map((item, index) => {
      return (
        <tr key={item}>
          <td className="cart_product">
            <Link>
              <ImageFromFireBase id={items[item].IdSanPham} />
            </Link>
          </td>
          <td className="cart_description">
            <h4>
              <Link
                to={"/SanPham/" + items[item].IdSanPham}
                state={{ detail: items[item] }}
              >
                {items[item].Ten[0]}
              </Link>
            </h4>
            <p>ID: {items[item].IdSanPham}</p>
          </td>
          <td className="cart_price">
            <p>{formatter.format(Number(items[item].GiaNhap * 1.4))}</p>
          </td>
          <td className="cart_quantity">
            <div className="cart_quantity_button">
              <input
                className="cart_quantity_input"
                type="text"
                name="quantity"
                defaultValue={items[item].Quantity}
                autoComplete="off"
                size={2}
                disabled
              />
            </div>
          </td>
          <td className="cart_total">
            <p className="cart_total_price">
              {formatter.format(
                Number(items[item].GiaNhap * items[item].Quantity * 1.4)
              )}
            </p>
          </td>
        </tr>
      );
    });
  };
  const getProvince = () => {
    axios
      .get("https://provinces.open-api.vn/api/?depth=1")
      .then(async (res) => {
        await setProvince(res.data);
      });
  };
  const getDistrict =(province)=>{
    axios.get(`https://provinces.open-api.vn/api/p/${province}?depth=2`).then(async (res) => {
      await setProvsince(res.data);
    });
    }
  const displayProvince=(list)=>{
    return Object.keys(list).map((item, i) => {
      return(
        <option>{province[item].name}</option>
      )
    })

  }
  useEffect(()=>{
    getProvince()
  },[])
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
                      <option hidden value="">
                        ---Tỉnh/Thành---
                      </option>
                      {displayProvince(province)}
                    </select>
                    <select type="text" placeholder="Địa chỉ">
                      <option hidden value="">
                        ---Quận/Huyện---
                      </option>
                      <option value>TP.HCM</option>
                    </select>
                    <select type="text" placeholder="Địa chỉ">
                      <option hidden value="">
                        ---Phường/Xã---
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
                <div
                  className="order-message pay"
                  style={{
                    background: "#fafafa",
                    padding: "0px 10px",
                    borderRadius: "5px",
                  }}
                >
                  <p style={{ color: "black" }}>Thanh toán</p>
                  <hr className="solid" style={{ background: "black" }} />
                  <div>
                    <span>Tạm tính:</span>
                    <span className="pull-right">
                      {formatter.format(total)}
                    </span>
                  </div>
                  <div>
                    <span>Điểm thưởng:</span>
                    <span className="pull-right">
                      {formatter.format(point * 10000)}
                    </span>
                  </div>
                  <hr className="solid" style={{ background: "black" }} />
                  <div>
                    <span style={{ fontSize: "20px" }}>Tổng cộng:</span>
                    <span
                      style={{ fontSize: "20px", color: "#fe980f" }}
                      className="pull-right"
                    >
                      {formatter.format(total - point * 10000)}
                    </span>
                  </div>
                  <button
                    className="btn btn-primary pull-right"
                    style={{ fontSize: "20px", borderRadius: "5px" }}
                  >
                    Đặt hàng
                  </button>
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
export default Checkout;
