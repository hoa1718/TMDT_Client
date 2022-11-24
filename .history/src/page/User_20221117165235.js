import Header from "../component/Header";
import { Link } from "react-router-dom";
function User() {
  const logOut = ()=>{
    
  }
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="userTitle">
                Cá nhân 
                <Link to={"/Login"} onClick={()=>logOut()} className="pull-right" style={{color:"red",textDecoration:"underline"}}>Đăng xuất</Link>
              </h2>

              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>Thông tin cá nhân</p>
                </div>
              </div>
              <div className="col-sm-3">
                <Link to={"/Bills"} style={{textDecoration:"none",color:"#333"}}>
                  <div className="userCard">
                    <i className="fa-solid fa-receipt"></i>
                    <p>Lịch sử đơn hàng</p>
                  </div>
                </Link>
  
              </div>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fas fa-solid fa-lock-open"></i>
                  <p>Thay đổi mật khẩu</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fas fa-solid fa-location-dot"></i>
                  <p>Danh sách địa chỉ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default User;
