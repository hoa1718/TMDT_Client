import Header from "../component/Header";
import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
function User() {
  ReactSession.setStoreType("localStorage");
  const logOut = () => {
    ReactSession.set("user", undefined);
  };
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="userTitle">
                Cá nhân
                <Link
                  to={"/Login"}
                  onClick={() => logOut()}
                  className="pull-right"
                  style={{ color: "red", textDecoration: "underline" }}
                >
                  Đăng xuất
                </Link>
              </h2>

              <div className="col-sm-3">
                <Link to={"/User/Information"}>
                  <div className="userCard">
                    <i className="fa-solid fa-circle-user"></i>
                    <p>Thông tin cá nhân</p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link
                  to={"/Bills"}
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  <div className="userCard">
                    <i className="fa-solid fa-receipt"></i>
                    <p>Lịch sử đơn hàng</p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link to={"/User/Password"}>
                  <div className="userCard">
                    <i className="fas fa-solid fa-lock-open"></i>
                    <p>Thay đổi mật khẩu</p>
                  </div>
                </Link>
              </div>
              <div className="col-sm-3">
                <Link to={"/User/Address"}>
                  <div className="userCard">
                    <i className="fas fa-solid fa-location-dot"></i>
                    <p>Danh sách địa chỉ</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default User;
