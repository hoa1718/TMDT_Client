import naruto from "../logo.png";
import { useEffect,useState } from "react";
function Detail({props}) {
const [slideIndex,setSlideIndex]  = useState(1);
const
function plusSlides(n) {
  let newSlide= slideIndex+n;
  setSlideIndex(newSlide);
  if(newSlide>3){ setSlideIndex(1)};
  if(newSlide<1){ setSlideIndex()}
  showSlides(slideIndex);
}
function currentSlide(n) {
  setSlideIndex(n);
  showSlides(n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");   
  if (n < 1) {setSlideIndex(slides.length)}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activeImage";
}
useEffect(()=>{
  showSlides()
})
  return (
    <div className="product-details">
      {/*product-details*/}
      <div className="col-sm-5">
        <div className="view-product">
            <div className="slideshow-container">
              <div className="mySlides ">
                <div className="numbertext">{slideIndex}/ 3</div>
                <img src={naruto} style={{ width: "100%" }} />
                <div className="text">Caption Text</div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext">{slideIndex}/ 3</div>
                <img src={naruto} style={{ width: "100%" }} />
                <div className="text">Caption Two</div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext">{slideIndex}/ 3</div>
                <img src={naruto} style={{ width: "100%" }} />
                <div className="text">Caption Three</div>
              </div>
              <button className="prevImage" onClick={()=>plusSlides(-1)}>
                ❮
              </button>
              <button className="nextImage" onClick={()=>plusSlides(1)}>
                ❯
              </button>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <span className="dot" onClick={()=>currentSlide(1)} />
              <span className="dot" onClick={()=>currentSlide(2)} />
              <span className="dot" onClick={()=>currentSlide(3)} />
            </div>
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
          <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
          <p>Web ID: 1089772</p>
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
