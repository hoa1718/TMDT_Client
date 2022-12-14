import Header from "../component/Header";
import { useLocation,useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useEffect, useState } from "react";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
import { Link } from "react-router-dom";
import axios from "axios";
import getUser from "../handler/getUser";
function Checkout() {
  const location = useLocation();
  let navigate=useNavigate();
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
        "http://localhost:5000/KhachHang/DiaChi/" +
          ReactSession.get("user").IdTaiKhoan
      )
      .then(async (res) => {
        await setShipping(res.data.data);
      });
  };
  const displayShipping = (list) => {
    return Object.keys(list).map((item, index) => {
      return (
        <div className="radio_wrapper">
          <input type={"radio"} name="shipping"  onChange={(e) => {
                setAddress(shipping[item].IdDiaChi);
                setPhone(shipping[item].SDT);
                setName(shipping[item].HoTenNguoiNhan);
              }} ></input>{" "}
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
        alert("M???i nh???p ????? th??ng tin");
        return;
      }
    }
    const data = {
      Cart: ReactSession.get("cart"),
      TenNguoiNhan: name,
      Sdt: phone,
      NgayMua: Date.now(),
      IdHinhThuc: 1,
      DiemSuDung: point,
      User: ReactSession.get("user"),
    };
    if(ReactSession.get('user')===undefined){
      data["DiaChi"]=`${address},${wardSel.options[wardSel.selectedIndex].text},${
        districtSel.options[districtSel.selectedIndex].text
      },${provinceSel.options[provinceSel.selectedIndex].text}`
    }
    else{ data["DiaChi"]=`${address}`}
    console.log(address);
    axios
      .post("http://localhost:5000/HoaDon/create", data)
      .then(async (res) => {if(res.data.message==="Yes"){
        alert("Thanh to??n th??nh c??ng!");
        ReactSession.set('cart',[]);
        navigate('/Home');
        getUser(data.User.IdTaiKhoan);       
        window.location.reload();
      }})
      .catch((err)=>{alert(err.response.data.message)});
      
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
                ????ng nh???p
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
                    <p>??i??a chi??</p>
                    {displayShipping(shipping)}
                  </div>
                ) : (
                  <div className="shopper-info order-message">
                    <p>Th??ng tin nh???n h??ng</p>
                    <form>
                      <input
                        type="text"
                        placeholder="H??? t??n ng?????i nh???n"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        required
                      />
                      <input
                        type="text"
                        placeholder="S??? ??i???n tho???i"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        placeholder="?????a ch???"
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
                          ---T???nh/Th??nh---
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
                          ---Qu???n/Huy???n---
                        </option>
                        {displayDistrict(district)}
                      </select>
                      <select id="ward">
                        <option hidden value={0}>
                          ---Ph?????ng/X??---
                        </option>
                        {displayWard(ward)}
                      </select>
                    </form>
                  </div>
                )}
              </div>

              <div className="col-sm-4">
                <div className="order-message">
                  <p>H??nh th???c thanh to??n</p>
                  <div className="radio_wrapper">
                    <input type={"radio"} name="paymentMethod"></input>{" "}
                    <span>Thanh to??n tr???c tuy???n</span>
                  </div>
                  <div className="radio_wrapper">
                    <input type={"radio"} name="paymentMethod"></input>{" "}
                    <span>Thanh to??n qua Bank</span>
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
                  <p style={{ color: "black" }}>Thanh to??n</p>
                  <hr className="solid" style={{ background: "black" }} />
                  <div>
                    <span>T???m t??nh:</span>
                    <span className="pull-right">
                      {formatter.format(total)}
                    </span>
                  </div>
                  <div>
                    <span>??i???m th?????ng:</span>
                    <span className="pull-right">
                      {formatter.format(point * 10000)}
                    </span>
                  </div>
                  <hr className="solid" style={{ background: "black" }} />
                  <div>
                    <span style={{ fontSize: "20px" }}>T???ng c???ng:</span>
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
                    ?????t h??ng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="review-payment">
            <h2>Gi??? h??ng</h2>
          </div>
          <div className="table-responsive cart_info">
            <table className="table table-condensed">
              <thead>
                <tr className="cart_menu">
                  <td className="image">S???n ph???m</td>
                  <td className="description" />
                  <td className="price">????n gi??</td>
                  <td className="quantity">S??? l?????ng</td>
                  <td className="total">T???ng</td>
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
