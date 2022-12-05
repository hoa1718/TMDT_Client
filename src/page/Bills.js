import Header from "../component/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

function Bills() {
  const [bills, setBills] = useState([]);
  ReactSession.setStoreType("localStorage");
  const getBills = () => {
    axios
      .get(
        "http://localhost:4000/HoaDon/KhachHang/" +
          ReactSession.get("user").IdTaiKhoan
      )
      .then(async (res) => {
        await setBills(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const displayBills = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <tr key={item}>
          <td>
            <Link to={"/Bills/"+list[item].IdHoaDon}>{list[item].IdHoaDon}</Link>
          </td>
          <td>{list[item].NgayMua}</td>
          <td>828 Sư vạn hạnh</td>
          <td>1.050.000đ</td>
          <td>{list[item].TrangThaiDonHang===0?"Chờ xác nhận" :"Hoàn thành"}</td>
        </tr>
      );
    });
  };
  useEffect(() => {
    getBills();
  }, []);
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="userTitle">Lịch sử đơn hàng</h2>
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
                  {displayBills(bills)}
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
