import Header from "../component/Header";
import { ReactSession } from 'react-client-session';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getUser from "../handler/getUser";
function Infor() {
  ReactSession.setStoreType("localStorage");
  const [name, setName] = useState(ReactSession.get('user').TenKhachHang);
  const [birth, setBirth] = useState(ReactSession.get('user').NgaySinh);
  const [email, setEmail] = useState(ReactSession.get('user').Email);
  let navigate=useNavigate();
  const changeInfor =()=>{
    if(name===""|| birth===null|| email===""){
      alert("Vui lòng nhập đủ thông tin !");
      return;
    }
    const data={
      id:ReactSession.get('user').IdTaiKhoan,
      name:name,
      birth:birth,
      email:email
    }
    axios
    .post("http://localhost:5000/KhachHang/update/info",data).then(async(result)=>{
      if(result.data==="Yes"){
        alert("Thay đổi thành công");
        navigate(`/User/${ReactSession.get('user').IdTaiKhoan}`)
        getUser(data.id);
       
        window.location.reload();
      }
    })
  }
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="userTitle">Thông tin tài khoản</h2>
            <div className="col-sm-8">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">
                  Họ tên
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vui lòng nhập họ tên"
                  aria-describedby="basic-addon1"
                  defaultValue={ReactSession.get('user').TenKhachHang}
                  onChange={(e)=>{setName(e.target.value)}}
                  required
                />
              </div>
              <div className="input-group" style={{ marginTop: "15px" }}>
                <span className="input-group-addon" id="basic-addon2">
                  Ngày sinh
                </span>
                <input
                  type="date"
                  className="form-control"
                  aria-describedby="basic-addon2"
                  defaultValue={new Date(ReactSession.get('user').NgaySinh).toLocaleDateString('en-CA')}
                  onChange={(e)=>{setBirth(e.target.value)}}
                  required
                />
              </div>
              <div className="input-group" style={{ marginTop: "15px" }}>
                <span className="input-group-addon" id="basic-addon3">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  aria-describedby="basic-addon3"
                  defaultValue={ReactSession.get('user').Email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <button
                className="btn btn-primary pull-right"
                style={{
                  fontSize: "15px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                }}
                onClick={()=>{changeInfor()}}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Infor;
