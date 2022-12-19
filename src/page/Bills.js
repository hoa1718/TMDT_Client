import Header from "../component/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import getFormattedDate from "../handler/dateFormat";
import { useEffect, useState } from "react";
import { ReactSession } from "react-client-session";

function Bills() {
  const [bills, setBills] = useState([]);
  const [shipping,setShipping]=useState([])
  ReactSession.setStoreType("localStorage");
  const getShipping = () => {
    axios
      .get(
        "http://localhost:5000/KhachHang/DiaChi/" +
          ReactSession.get("user").IdTaiKhoan
      )
      .then(async (res) => {
        await setShipping(res.data.data);
      });
  };
  const getBills = () => {
    axios
      .get(
        "http://tmdt-server.herokuapp.com/HoaDon/KhachHang/" +
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
    let a="";
    return Object.keys(list).map((item, i) => {
      a="";
      for(let i =0;i<shipping.length;i++){
        if(shipping[i].IdDiaChi===list[item].DiaChiNhan){
          a=shipping[i];
        }
      }
      return (
        <tr key={item}>
          <td>
            <Link to={"/Bills/"+list[item].IdHoaDon} state={{detail: list[item],address:a}}>{list[item].IdHoaDon}</Link>
          </td>
          <td>{getFormattedDate(new Date(list[item].NgayMua))}</td>
          <td>{a.DiaChi}</td>
          <td>{list[item].TrangThaiDonHang===0?"Chờ xác nhận" :"Hoàn thành"}</td>
        </tr>
      );
    });
  };
  useEffect(() => {
    getBills();
    getShipping();
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
