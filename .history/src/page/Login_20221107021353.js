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
    e.preventDefault();
    if( username===''){
      const err=document.querySelector('#userErr');
      err.style.display="block"
      err.innerText="Mời nhập tài khoản"
      return false;
    }
    if( password===''){
      const err=document.querySelector('#passErr');
      err.style.display="block"
      err.innerText="Mời nhập mật khẩu"
      return false;
    }
    validatePassword(password,e);
    const data={
      username:username,
      password:password
    }
    axios.post("http://localhost:4000/Login/authentication",data)
  }
  const registration=(e)=>{
    e.preventDefault();
    if( newUsername===''){
      const err=document.querySelector('#newuserErr');
      err.style.display="block"
      err.innerText="Mời nhập tài khoản"
      return false;
    }
    if( email===''){
      const err=document.querySelector('#emailErr');
      err.style.display="block"
      err.innerText="Mời nhập email"
      return false;
    }
    if( newPassword===''){
      const err=document.querySelector('#newpassErr');
      err.style.display="block"
      err.innerText="Mời nhập mật khẩu"
      return;
    }
    validatePassword(newPassword,e)
  }
  function validatePassword(newPassword) {
    var minNumberofChars = 8;
    var regularExpression  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
    
    if(newPassword.length < minNumberofChars){
        alert("Mật khẩu phải hơn 8 ký tự"); 
        return false ;    
    }
    if(!regularExpression.test(newPassword)) {
        alert("Mật khẩu phải chứa chữ thường, chữ hoa và số");
        return false ;     
    }
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
                <form onSubmit={e=>authentication(e)}>
                  <input
                    type="text"
                    placeholder="Tài khoản"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <p style={{display:"none"}} id="userErr" className="errorLogin"></p>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <p style={{display:"none"}} id="passErr" className="errorLogin"></p>
                  <span>
                    <input type="checkbox" className="checkbox" />
                    Duy trì đăng nhập
                  </span>
                  <button type="submit" className="btn btn-default" >
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
                  <p style={{display:"none"}} id="newuserErr" className="errorLogin"></p>
                  <input
                    type="email"
                    placeholder="Email "
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <p style={{display:"none"}} id="emailErr" className="errorLogin"></p>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  />
                  <p style={{display:"none"}} id="newpassErr" className="errorLogin"></p>
                  <button type="submit" className="btn btn-default" onClick={e=>registration(e)}>
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
