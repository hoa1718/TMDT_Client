import axios from "axios";
import { useState } from "react";
import Header from "../component/Header";
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');

  const authentication=(e)=>{
    
    if( username===''){
      const err=document.querySelector('#userErr');
      err.innerText="Moi nhap"
      
      return;
    }
    const data={
      username:username,
      password:password
    }
    console.log(data);
    axios.post("http://localhost:4000/Login/authentication",data)
  }
  return (
    <>
      <Header></Header>
      <section id="form">
        {/*form*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
              <div className="login-form">
                {/*login form*/}
                <h2>ĐĂNG NHẬP</h2>
                <form >
                  <input
                    type="text"
                    placeholder="Tài khoản"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <p id="userErr"></p>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <p id="passErr"></p>
                  <span>
                    <input type="checkbox" className="checkbox" />
                    Duy trì đăng nhập
                  </span>
                  <button type="submit" className="btn btn-default" onClick={e=>authentication(e)}>
                    Đăng nhập
                  </button>
                </form>
              </div>
              {/*/login form*/}
            </div>
            <div className="col-sm-1">
              <h2 className="or">HOẶC</h2>
            </div>
            <div className="col-sm-4">
              <div className="signup-form">
                {/*sign up form*/}
                <h2>ĐĂNG KÝ!</h2>
                <form action="#">
                  <input
                    type="text"
                    placeholder="Tên tài khoản"
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email "
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                  <button type="submit" className="btn btn-default">
                    Đăng ký
                  </button>
                </form>
              </div>
              {/*/sign up form*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
