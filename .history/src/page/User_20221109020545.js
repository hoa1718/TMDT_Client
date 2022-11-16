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
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>Thông tin cá nhân</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>Thông tin cá nhân</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>Thông tin cá nhân</p>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="userCard">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>Thông tin cá nhân</p>
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
