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
      e.preventDefault();
      const err=document.querySelector('#userErr');
      err.style.display="block"
      err.innerText="Mời nhập tài khoản"
      return false;
    }
    if( password===''){
      e.preventDefault();
      const err=document.querySelector('#passErr');
      err.style.display="block"
      err.innerText="Mời nhập mật khẩu"
      return false;
    }
    else{
      let isValid=validatePassword(password,e);
      if(isValid===-1) return false
    }
    const data={
      username:username,
      password:password
    }
    axios.post("http://localhost:4000/Login/authentication",data).then((res)=>{
      alert("Xin chào "+ res.data.TenKhachHang);
    })
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
      return false;
    }
    else{
      let isValid=validatePassword(newPassword,e);
      if(isValid===-1) return false
    }
  }
  function validatePassword(p,e) {
    e.preventDefault(); 
    var minNumberofChars = 8;
    var regularExpression  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;;
    
    if(p.length < minNumberofChars){
       alert('Tối thiểu 8 ký tự !')
       return -1; 
    }
    if(!regularExpression.test(p)) {
      alert('Phải bao gồm chữ thường, chữ hoa và chữ số !')
       return -1;
           
    }
    return 1;
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
