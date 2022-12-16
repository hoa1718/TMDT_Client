import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ImageDetail } from "./ImageDetail";
import formatter from "../changeCurrency";
function Detail({ props }) {
  const location = useLocation();
  const detail = location.state.detail;

  function showSlides() {
    try {
      let slides = document.getElementsByClassName("mySlides");
      let first= document.querySelector(".imgList img")
      let url=first.getAttribute('src');
      console.log(url);
      slides.setAttribute('src',first.getAttribute('src'))
    } catch {
      return 0;
    }
  }
  useEffect(() => {
    showSlides();
  }, [detail.IdSanPham]);

  return (
    <div className="product-details">
      {/*product-details*/}
      <div className="col-sm-5">
        <div className="view-product">
          <div className="slideshow-container">
            <div className="mySlides">
              <ImageDetail id={detail.IdSanPham} number={1}></ImageDetail>
            </div>
            <div className="imgList">
              <ImageDetail id={detail.IdSanPham}></ImageDetail>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="col-sm-7">
        <div className="product-information">
          <h2>{detail.Ten[0]}</h2>
          <p>Mã sản phẩm: {detail.IdSanPham}</p>
          <span>
            <span>{formatter.format(Number(detail.GiaNhap * 1.4))}</span>
          </span>
          <p>
            <b>Phim:</b> {detail.TenPhim}
          </p>
          <p>
            <b>Thể loại:</b> {detail.TheLoai}
          </p>
          <p>
            <b>Hãng:</b> {detail.Ten[1]}
          </p>
          <p>
            <b>Dài x Rộng x Cao (cm):</b> {detail.ChieuDai} x {detail.ChieuRong}{" "}
            x {detail.ChieuCao}
          </p>
          <p>
            <b>Trọng lượng:</b> {detail.TrongLuong}kg
          </p>
          <p>
            <b>Đã bán:</b> {detail.SLBan}
          </p>
          <p style={{marginTop:"10px"}}>
            <button type="button" className="btn cart">
              <i className="fa fa-shopping-cart" style={{marginRight:"10px"}} />
              Thêm vào giỏ
            </button>
            <button type="button" className="btn favorite circle">
              <i className="fa fa-solid fa-heart"style={{marginTop:"1px"}} ></i>
            </button>
            <button type="button" className="btn compare circle">
              <i className="fa fa-solid fa-code-compare" style={{marginTop:"1px"}}></i>
            </button>
          </p>
        </div>
        {/*/product-information*/}
      </div>
    </div>
  );
}
export default Detail;
