import Header from "../component/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import getFormattedDate from "../handler/dateFormat";
import formatter from "../changeCurrency";
import axios from "axios";

import ImageFromFireBase from "../component/ImgFirebase";
function Detail() {
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState([]);
  const location = useLocation();
  let sum = 0;
  const bill = location.state.detail;

  const address = location.state.address;
  const getDetail = () => {
    axios
      .get("http://localhost:5000/HoaDon/Detail/" + bill.IdHoaDon)
      .then(async (res) => {
        await setDetail(res.data.data);
        await setProduct(res.data.product);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const displayDetail = (list) => {
    return Object.keys(list).map((item, i) => {
      var name = "";
      for (let i = 0; i < product.length; i++) {
        if (product[i].IdSanPham === list[item].IdSp) {
          name = product[i].Ten;
        }
      }
      sum += list[item].DonGiaBan * list[item].SoLuong;
      return (
        <tr>
          <td className="billDetail">
            <ImageFromFireBase
              id={list[item].IdSp}
              style={{ width: "50px " }}
            />
          </td>
          <td>{name}</td>
          <td>{list[item].SoLuong}</td>
          <td>{formatter.format(list[item].DonGiaBan)}</td>
          <td>{formatter.format(list[item].DonGiaBan * list[item].SoLuong)}</td>
        </tr>
      );
    });
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <h2 className="userTitle">Đơn hàng: {bill.IdHoaDon}</h2>
            <div>
              <span>- Tên người nhận: </span>
              <b>{address.HoTenNguoiNhan}</b>
            </div>
            <div>
              <span>- Ngày mua hàng: </span>
              <b>{getFormattedDate(new Date(bill.NgayMua))}</b>
            </div>
            <div>
              <span>- Địa chỉ: </span>
              <b>{address.DiaChi}</b>
            </div>
            <div>
              <span>- SĐT: </span>
              <b>{address.SDT}</b>
            </div>
            <div>
              <span>- Trạng thái: </span>
             <b>{bill.TrangThaiDonHang===0 ? "Chờ xác nhận":bill.TrangThaiDonHang===-1?"Đơn bị huỷ":bill.TrangThaiDonHang===1?"Đang giao hàng":"Hoàn thành"}</b>
            </div>
            <div className="col-sm-12">
              <table className="table ">
                <thead>
                  <tr>
                    <th></th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Tổng</th>
                  </tr>
                </thead>
                <tbody>{displayDetail(detail)}</tbody>
              </table>

              <div className="col-sm-3 pull-right">
                <div>
                  <span style={{ marginRight: "20px" }}>Tổng tiền:</span>
                  <span style={{ marginLeft: "10px", color: "#fe980f" }}>
                    {formatter.format(sum)}
                  </span>
                </div>
                <div  style={{  marginTop: "10px" }}>
                  Điểm thưởng:
                  <span style={{ marginLeft: "10px", color: "#fe980f" }}>{bill.DiemSuDung}</span>
                </div>
                <div style={{ fontSize: "20px", marginTop: "10px" }}>
                  Thanh toán:
                  <span style={{ marginLeft: "10px", color: "#fe980f" }}>
                    {formatter.format(sum-(bill.DiemSuDung*10000))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Detail;
