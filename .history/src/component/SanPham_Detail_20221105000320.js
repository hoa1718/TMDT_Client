import naruto from "../logo.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Detail({ props }) {
  const location = useLocation();
  const detail = location.state.detail;
  console.log(detail);
  const [slideIndex, setSlideIndex] = useState(1);
  const [imageUrl, setImageUrl] = useState([]);
  function plusSlides(n) {
    let newSlide = slideIndex + n;
    setSlideIndex(newSlide);
    if (newSlide > 3) {
      newSlide = 1;
      setSlideIndex(newSlide);
    }
    if (newSlide <= 0) {
      newSlide = 3;
      setSlideIndex(newSlide);
    }
    showSlides();
  }

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      if (i == slideIndex - 1) {
        continue;
      }
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  useEffect(() => {
    showSlides();
  });
  return (
    <div className="product-details">
      {/*product-details*/}
      <div className="col-sm-5">
        <div className="view-product">
          <div className="slideshow-container">
            <div className="mySlides  ">
              <div className="numbertext">{slideIndex}/ 3</div>
              <img src={naruto} style={{ width: "100%" }} alt="image" />
              <div className="text">Caption Text</div>
            </div>
            <div className="mySlides ">
              <div className="numbertext">{slideIndex}/ 3</div>
              <img src={naruto} style={{ width: "100%" }} alt="image" />
              <div className="text">Caption Two</div>
            </div>
            <div className="mySlides ">
              <div className="numbertext">{slideIndex}/ 3</div>
              <img src={naruto} style={{ width: "100%" }} alt="image" />
              <div className="text">Caption Three</div>
            </div>
            <button className="prevImage" onClick={() => plusSlides(-1)}>
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
          <p>Mã sản phẩm: {}</p>
          <span>
            <span>US $59</span>
            <label>Quantity:</label>
            <input type="number" defaultValue={1} min={1} />
            <button type="button" className="btn btn-fefault cart">
              <i className="fa fa-shopping-cart" />
              Add to cart
            </button>
          </span>
          <p>
            <b>Availability:</b> In Stock
          </p>
          <p>
            <b>Condition:</b> New
          </p>
          <p>
            <b>Brand:</b> E-SHOPPER
          </p>
        </div>
        {/*/product-information*/}
      </div>
    </div>
  );
}
export default Detail;
