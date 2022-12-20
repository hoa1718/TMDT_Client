import Header from "../component/Header";
import { useState, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";
function Address() {
  ReactSession.setStoreType("localStorage");
  const [id, setID] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [shipping, setShipping] = useState([]);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const getShipping = () => {
    axios
      .get(
        "https://tmdt-client.onrender.com/KhachHang/DiaChi/" +
          ReactSession.get("user").IdTaiKhoan
      )
      .then(async (res) => {
        await setShipping(res.data.data);
      });
  };
  const displayShipping = (list) => {
    return Object.keys(list).map((item, index) => {
      return (
        <tr key={item}>
          <td>{shipping[item].HoTenNguoiNhan}</td>
          <td>{shipping[item].SDT}</td>
          <td>{shipping[item].DiaChi}</td>
          <td>
            <button
              className="btn"
              style={{
                background: "#fe980f",
                color: "white",
                borderRadius: "5px",
                padding: "5px 10px",
              }}
              onClick={() => {
                document.querySelector(".createAddress").style.display = "none";
                document.querySelector(".updateAddress").style.display =
                  "block";
                document.querySelectorAll(".name")[1].value =
                  shipping[item].HoTenNguoiNhan;
                document.querySelectorAll(".phone")[1].value =
                  shipping[item].SDT;
                document.querySelectorAll(".place")[1].value =
                  shipping[item].DiaChi;
                setName(shipping[item].HoTenNguoiNhan);
                setPhone(shipping[item].SDT);
                setAddress(shipping[item].DiaChi);
                setID(shipping[item].IdDiaChi);
              }}
            >
              Sửa
            </button>
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
  const update = () => {
    if (name === undefined || phone === undefined || address === undefined) {
      alert("Mời nhập đủ thông tin");
      return;
    }
    const data = {
      TenNguoiNhan: name,
      SDT: phone,
      DiaChi: address,
      ID: id,
    };
    axios
      .post("https://tmdt-client.onrender.com/KhachHang/update/address", data)
      .then(async (res) => {
        if (res.data === "Yes") {
          alert("Thay đổi thành công");
          window.location.reload();
        }
      });
  };
  const create = () => {
    const provinceSel = document.querySelector("#province");
    const districtSel = document.querySelector("#district");
    const wardSel = document.querySelector("#ward");
      if (
        name === undefined ||
        phone === undefined ||
        address === undefined ||
        Number(provinceSel.value) === 0
      ) {
        alert("Mời nhập đủ thông tin");
        return;
      }
    const data = {
      TenNguoiNhan: name,
      SDT: phone,
      DiaChi: `${address}, ${wardSel.options[wardSel.selectedIndex].text},${
        districtSel.options[districtSel.selectedIndex].text
      },${provinceSel.options[provinceSel.selectedIndex].text}`,
      User:ReactSession.get('user').IdTaiKhoan
    };
    axios
    .post("https://tmdt-client.onrender.com/KhachHang/create/address", data)
    .then(async (res) => {
      if (res.data === "Yes") {
        alert("Tạo thành công");
        window.location.reload();
      }
    });
    console.log(data);
  };
  useEffect(() => {
    getShipping();
    getProvince();
  }, []);
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="userTitle">Danh sách địa chỉ </h2>

            <div className="col-sm-8">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Tên người nhận</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                  </tr>
                </thead>
                <tbody>{displayShipping(shipping)}</tbody>
              </table>
              <button
                className="btn"
                style={{
                  background: "#fe980f",
                  color: "white",
                  borderRadius: "5px",
                  padding: "5px 10px",
                }}
                onClick={() => {
                  document.querySelector(".updateAddress").style.display =
                    "none";
                  const a = document.querySelector(".createAddress");
                  a.style.display = "block";
                }}
              >
                <i
                  className="fa-solid fa-plus"
                  style={{ marginRight: "5px" }}
                ></i>
                Thêm
              </button>
              <div className="createAddress" style={{ display: "none" }}>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">
                        Tên người nhận
                      </span>
                      <input
                        type="text"
                        className="form-control name"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">
                        Sđt
                      </span>
                      <input
                        type="number"
                        className="form-control phone"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">
                        Địa chỉ
                      </span>
                      <input
                        type="test"
                        className="form-control place"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
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
                    <button
                      className="btn pull-right"
                      style={{
                        background: "#fe980f",
                        color: "white",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        create();
                      }}
                    >
                      <i
                        className="fa-solid fa-floppy-disk"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
              <div className="updateAddress" style={{ display: "none" }}>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">
                        Tên người nhận
                      </span>
                      <input
                        type="text"
                        className="form-control name"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">
                        Sđt
                      </span>
                      <input
                        type="number"
                        className="form-control phone"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">
                        Địa chỉ
                      </span>
                      <input
                        type="test"
                        className="form-control place"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn pull-right"
                      style={{
                        background: "#fe980f",
                        color: "white",
                        borderRadius: "5px",
                        padding: "5px 10px",
                        marginTop: "10px",
                      }}
                      onClick={() => update()}
                    >
                      <i
                        className="fa-solid fa-floppy-disk"
                        style={{ marginRight: "5px" }}
                      ></i>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Address;
