import Header from "../component/Header";
function Bills() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="userTitle">
                Lịch sử đơn hàng
            </h2>
            <div className="col-sm-11">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Ngày mua</th>
                    <th>Địa chỉ</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>09/11/2022</td>
                    <td>828 Sư vạn hạnh</td>
                    <td>1.050.000đ</td>
                    <td>Hoàn thành</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Bills;
