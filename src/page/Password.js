import Header from "../component/Header";
import { ReactSession } from 'react-client-session';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getUser from "../handler/getUser";
function Password() {
  ReactSession.setStoreType("localStorage");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [err, setErr] = useState("");
  let navigate=useNavigate();
  function validatePassword(p, e) {
    e.preventDefault();
    var minNumberofChars = 8;
    var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (p.length < minNumberofChars) {
      setErr("Mật khẩu mới tối thiểu 8 ký tự !");
      return -1;
    }
    if (!regularExpression.test(p)) {
      setErr("Mật khẩu mới phải bao gồm chữ thường, chữ hoa và chữ số !");
      return -1;
    }
    return 1;
  }
  const change = (e) => {
    if(oldPassword===ReactSession.get('user').MatKhau){
      if(validatePassword(newPassword, e)===-1){
        return;
      };
      const data={
        id:ReactSession.get('user').IdTaiKhoan,
        password:newPassword
      }
      axios
      .post("https://tmdt-client.onrender.com/KhachHang/update/password",data).then(async(result)=>{
        if(result.data==="Yes"){
          getUser(data.id);
          alert("Thay đổi thành công");
          navigate(`/User/${ReactSession.get('user').IdTaiKhoan}`)
          window.location.reload();
        }
      })
    }
    else{
      setErr('Mật khẩu cũ không đúng !')
    }
  };
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="userTitle">Thay đổi mật khẩu</h2>
            <div className="col-sm-8">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon2">
                  Mật khẩu cũ
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
              </div>
              <div className="input-group" style={{ marginTop: "15px" }}>
                <span className="input-group-addon" id="basic-addon2">
                  Mật khẩu mới
                </span>
                <input
                  type="password"
                  className="form-control"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
              </div>
              <div style={{ marginTop: "15px",color:"red" }}>{err}</div>
              <button
                className="btn btn-primary pull-right"
                style={{
                  fontSize: "15px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                }}
                onClick={(e) => change(e)}
              >
                Lưu mật khẩu
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Password;
