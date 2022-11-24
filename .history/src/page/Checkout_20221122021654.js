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
  ReactSession.setStoreType("localStorage");
  const [items, setItems] = useState(ReactSession.get("cart"));
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [shipping, setShipping] = useState([]);
  const [address, setAddress] = useState();
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
  const getShipping = () => {
    axios
      .get(
        "http://localhost:4000/KhachHang/DiaChi/" +
          ReactSession.get("user").IdTaiKhoan
      )
      .then(async (res) => {
        await setShipping(res.data.data);
      });
  };
  const displayShipping = (list) => {
    return Object.keys(list).map((item, index) => {
      if (Number(shipping[item].DiaChiMacDinh) === 1) {
        return (
          <div className="radio_wrapper">
            <input
              type={"radio"}
              name="shipping"
              checked
              onChange={(e) => {
                setAddress(shipping[item].DiaChi);
                setPhone(shipping[item].SDT);
                setName(shipping[item].HoTenNguoiNhan);
              }}
            ></input>{" "}
            <span>{shipping[item].HoTenNguoiNhan}, </span>
            <span>{shipping[item].SDT}, </span>
            <span>{shipping[item].DiaChi}</span>
          </div>
        );
      }
      return (
        <div className="radio_wrapper">
          <input type={"radio"} name="shipping"></input>{" "}
          <span>{shipping[item].HoTenNguoiNhan}, </span>
          <span>{shipping[item].SDT}, </span>
          <span>{shipping[item].DiaChi}</span>
        </div>
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
  const getDistrict = (province) => {
    axios
      .get(`https://provinces.open-api.vn/api/p/${province}?depth=2`)
      .then(async (res) => {
        await setDistrict(res.data.districts);
      });
  };
  const getWard = (district) => {
    axios
      .get(`https://provinces.open-api.vn/api/d/${district}?depth=2`)
      .then(async (res) => {
        await setWard(res.data.wards);
      });
  };
  const displayProvince = (list) => {
    return Object.keys(list).map((item, i) => {
      return <option value={province[item].code}>{province[item].name}</option>;
    });
  };
  const displayDistrict = (list) => {
    return Object.keys(list).map((item, i) => {
      return <option value={district[item].code}>{district[item].name}</option>;
    });
  };
  const displayWard = (list) => {
    return Object.keys(list).map((item, i) => {
      return <option value={ward[item].code}>{ward[item].name}</option>;
    });
  };
  const checkOut = () => {
    const provinceSel = document.querySelector("#province");
    const districtSel = document.querySelector("#district");
    const wardSel = document.querySelector("#ward");
    if(ReactSession.get('user') ===undefined){
      if (
        name === undefined ||
        phone === undefined ||
        address === undefined ||
        Number(provinceSel.value) === 0
      ) {
        alert("Mời nhập đủ thông tin");
        return;
      }
    }
    const data = {
      Cart: ReactSession.get("cart"),
    
      DiaChi: `${address},${wardSel.options[wardSel.selectedIndex].text},${
        districtSel.options[districtSel.selectedIndex].text
      },${provinceSel.options[provinceSel.selectedIndex].text}`,
      TenNguoiNhan: name,
      Sdt: phone,
      NgayMua: Date.now(),
      IdHinhThuc: 1,
      DiemSuDung: point,
      User: ReactSession.get("user"),
    };
    axios
      .post("http://localhost:4000/HoaDon/create", data)
      .then(async (res) => {});
  };
  useEffect(() => {
    getProvince();
    if (ReactSession.get("user") !== undefined) {
      getShipping();
    }
  }, []);
  return (
    <>
      <Header></Header>
      <section id="cart_items">
        <div className="container">
          {!ReactSession.get("user") && (
            <div className="register-req">
              <Link
                className="btn btn-primary"
                style={{ marginTop: "0px" }}
                to="/Login"
              >
                Đăng nhập
              </Link>
            </div>
          )}

          {/*/register-req*/}
          <div className="shopper-informations">
            <div className="row">
              <div className="col-sm-4">
                {ReactSession.get("user") ? (
                  <div className="order-message">
                    {" "}
                    <p>Địa chỉ</p>
                    {displayShipping(shipping)}
                  </div>
                ) : (
                  <div className="shopper-info order-message">
                    <p>Shopper Information</p>
                    <form>
                      <input
                        type="text"
                        placeholder="Họ tên người nhận"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Số điện thoại"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Địa chỉ"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      ></input>
                      <select
                        onChange={(e) => {
                          getDistrict(e.target.value);
                        }}
                        id="province"
                      >
                        <option hidden value={0}>
                          ---Tỉnh/Thành---
                        </option>
                        {displayProvince(province)}
                      </select>
                      <select
                        onChange={(e) => {
                          getWard(e.target.value);
                        }}
                        id="district"
                      >
                        <option hidden value={0}>
                          ---Quận/Huyện---
                        </option>
                        {displayDistrict(district)}
                      </select>
                      <select id="ward">
                        <option hidden value={0}>
                          ---Phường/Xã---
                        </option>
                        {displayWard(ward)}
                      </select>
                    </form>
                  </div>
                )}
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
                    onClick={() => checkOut()}
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
