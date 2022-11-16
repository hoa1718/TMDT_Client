function Detail() {
  return (
 
      <div classname="product-details">
        {"{"}/*product-details*/{"}"}
        <div classname="col-sm-5">
          <div classname="view-product">
            <img src="images/product-details/1.jpg" alt />
            <h3>ZOOM</h3>
          </div>
          <div
            id="similar-product"
            classname="carousel slide"
            data-ride="carousel"
          >
            {"{"}/* Wrapper for slides */{"}"}
            <div classname="carousel-inner">
              <div classname="item active">
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
              <div classname="item">
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
              <div classname="item">
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
            {"{"}/* Controls */{"}"}
            <a
              classname="left item-control"
              href="#similar-product"
              data-slide="prev"
            >
              <i classname="fa fa-angle-left"></i>
            </a>
            <i classname="fa fa-angle-left">
              <a
                classname="right item-control"
                href="#similar-product"
                data-slide="next"
              >
                <i classname="fa fa-angle-right"></i>
              </a>
              <i classname="fa fa-angle-right"></i>
            </i>
          </div>
          <i classname="fa fa-angle-left">
            <i classname="fa fa-angle-right"></i>
          </i>
        </div>
        <i classname="fa fa-angle-left">
          <i classname="fa fa-angle-right">
            <div classname="col-sm-7">
              <div classname="product-information">
                {"{"}/*/product-information*/{"}"}
                <img
                  src="images/product-details/new.jpg"
                  classname="newarrival"
                  alt
                />
                <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
                <p>Web ID: 1089772</p>
                <img src="images/product-details/rating.png" alt />
                <span>
                  <span>US $59</span>
                  <label>Quantity:</label>
                  <input type="text" defaultvalue="{3}" />
                  <button type="button" classname="btn btn-fefault cart">
                    <i classname="fa fa-shopping-cart">Add to cart</i>
                  </button>
                  <i classname="fa fa-shopping-cart"></i>
                </span>
                <i classname="fa fa-shopping-cart">
                  <p>
                    <b>Availability:</b> In Stock
                  </p>
                  <p>
                    <b>Condition:</b> New
                  </p>
                  <p>
                    <b>Brand:</b> E-SHOPPER
                  </p>
                  <a href>
                    <img
                      src="images/product-details/share.png"
                      classname="share img-responsive"
                      alt
                    />
                  </a>
                </i>
              </div>
              <i classname="fa fa-shopping-cart">
                {"{"}/*/product-information*/{"}"}
              </i>
            </div>
            <i classname="fa fa-shopping-cart"></i>
          </i>
        </i>
      </div>
      <i classname="fa fa-angle-left">
        <i classname="fa fa-angle-right">
          <i classname="fa fa-shopping-cart">
            {"{"}/*/product-details*/{"}"}
          </i>
        </i>
      </i>
    </div>
  );
}
export default Detail;
