import Header from "../component/Header";
function User() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="userTitle">Thông tin cá nhân</h2>
              <span className="pull-right"></span>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>Thông tin cá nhân</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-receipt"></i>
                  <p>Lịch sử đơn hàng</p>
                </div>
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
