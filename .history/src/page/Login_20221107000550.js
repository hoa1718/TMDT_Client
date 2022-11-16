import Header from '../component/Header'
function Login() {
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
              <form action="#">
                <input type="text" placeholder="Tài khoản" />
                <input type="password" placeholder="Mật khẩu" />
                <span>
                  <input type="checkbox" className="checkbox" />
                  Duy trì đăng nhập
                </span>
                <button type="submit" className="btn btn-default">
                  Đăng nhập
                </button>
              </form>
            </div>
            {/*/login form*/}
          </div>
          <div className="col-sm-1">
            <h2 className="or">OR</h2>
          </div>
          <div className="col-sm-4">
            <div className="signup-form">
              {/*sign up form*/}
              <h2>New User Signup!</h2>
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn btn-default">
                  Signup
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
