import Header from "../component/Header";
function Bills() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <table className="table">
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
                    <td></td>
                    <td>1</td>
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
