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
              <div className="col-sm-4">
                <div className="userCard"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default User;
