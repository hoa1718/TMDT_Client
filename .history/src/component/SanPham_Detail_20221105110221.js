import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {ImageDetail} from "./ImageDetail";
import Delay from './Delay'
function Detail({ props }) {
  const location = useLocation();
  const detail = location.state.detail;
  const [slideIndex, setSlideIndex] = useState(1);
  const [imageUrl, setImageUrl] = useState([]);
  function plusSlides(n) {
    let newSlide = slideIndex + n;
    if (newSlide > 3) {
      newSlide = 1;
    }
    setSlideIndex(newSlide);
    showSlides(newSlide);
  }
  function minusSlides(n) {
    let newSlide = slideIndex - n;
    if (newSlide <= 0) {
      newSlide = 3;
    }
    setSlideIndex(newSlide);
    showSlides(newSlide);
    
  }

  function showSlides(n) {
    try{
      let i;
      let slides = document.getElementsByClassName("mySlides");
      // if(n>3){n=1}
      // else if(n<1){n=3}
      for (i = 0; i < slides.length; i++) {
        if (i === n - 1) {
          continue;
        }
        slides[i].style.display = "none";
      }
      slides[n - 1].style.display = "block";
    }
    catch{
      return 0;
    }
  }
  useEffect(() => {
    showSlides(1);
  }, [detail.IdSanPham]);

  return (
    <Delay waitBeforeShow={500}>
<div className="product-details">
      {/*product-details*/}
      <div className="col-sm-5">
        <div className="view-product">
          <div className="slideshow-container">
              { 
                <ImageDetail id={detail.IdSanPham}  />
              }
            <button className="prevImage" onClick={() => minusSlides(1)}>
              ❮
            </button>
            <button className="nextImage" onClick={() => plusSlides(1)}>
              ❯
            </button>
          </div>
          <br />
        </div>
      </div>
      <div className="col-sm-7">
        <div className="product-information">
          {/*/product-information*/}
          <img
            src="images/product-details/new.jpg"
            className="newarrival"
            alt
          />
          <h2>{detail.Ten[0]}</h2>
          <p>Mã sản phẩm: {detail.IdSanPham}</p>
          <span>
            <span>US $59</span>
          </span>
          <p>
            <b>Phim:</b> {detail.TenPhim}
          </p>
          <p>
            <b>Thể loại:</b> {detail.TenLoai}
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
          <span>
            <label>Số lượng:</label>
            <input type="number" defaultValue={1} min={1} />
          </span>
          <p>
            <button type="button" className="btn cart">
              <i className="fa fa-shopping-cart" />
              Thêm vào giỏ
            </button>
            <button type="button" className="btn favorite circle">
              <i className="fa fa-solid fa-heart"></i>
            </button>
            <button type="button" className="btn compare circle">
              <i className="fa fa-solid fa-code-compare"></i>
            </button>
          </p>
        </div>
        {/*/product-information*/}
      </div>
    </div>
    </Delay>
    
  );
}
export default Detail;
