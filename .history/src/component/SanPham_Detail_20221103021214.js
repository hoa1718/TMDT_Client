import naruto from "../logo.png";

function Detail() {
  return (
    <div className="product-details">
      {/*product-details*/}
      <div className="col-sm-5">
        <div className="view-product">
          <div>
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src="img_nature_wide.jpg" style={{ width: "100%" }} />
                <div className="text">Caption Text</div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src="img_snow_wide.jpg" style={{ width: "100%" }} />
                <div className="text">Caption Two</div>
              </div>
              <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src="img_mountains_wide.jpg" style={{ width: "100%" }} />
                <div className="text">Caption Three</div>
              </div>
              <a className="prev" onclick="plusSlides(-1)">
                ❮
              </a>
              <a className="next" onclick="plusSlides(1)">
                ❯
              </a>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <span className="dot" onclick="currentSlide(1)" />
              <span className="dot" onclick="currentSlide(2)" />
              <span className="dot" onclick="currentSlide(3)" />
            </div>
          </div>
        </div>
        <div
          id="similar-product"
          className="carousel slide"
          data-ride="carousel"
        >
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <a href>
                <img src={naruto} alt />
              </a>
              <a href>
                <img src="images/product-details/similar2.jpg" alt />
              </a>
              <a href>
                <img src="images/product-details/similar3.jpg" alt />
              </a>
            </div>
            <div className="item">
              <a href>
                <img src="images/product-details/similar1.jpg" alt />
              </a>
              <a href>
                <img src="images/product-details/similar2.jpg" alt />
              </a>
              <a href>
                <img src="images/product-details/similar3.jpg" alt />
              </a>
            </div>
            <div className="item">
              <a href>
                <img src="images/product-details/similar1.jpg" alt />
              </a>
              <a href>
                <img src="images/product-details/similar2.jpg" alt />
              </a>
              <a href>
                <img src="images/product-details/similar3.jpg" alt />
              </a>
            </div>
          </div>
          {/* Controls */}
          <a
            className="left item-control"
            href="#similar-product"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="right item-control"
            href="#similar-product"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
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
