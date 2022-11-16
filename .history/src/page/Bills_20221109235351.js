import Header from "../component/Header";
function Bills() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Ngày mua</th>
                        <th>Địa chỉ</th>
                    </tr>
                </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Bills;
