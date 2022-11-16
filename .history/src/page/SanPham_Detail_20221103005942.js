import Recent from "../component/Recent";
import Header from "../component/Header";
import SP_Detail from "../component/SanPham_Detail";
import Review from "../component/Review";
function Detail() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div class="col-sm-12">
              <SP_Detail></SP_Detail>
              <Review></Review>
              <div className="recommended_items">{/*recommended_items*/}
  <h2 className="title text-center">recommended items</h2>					
  <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="item active">	
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/recommend1.jpg" alt />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/recommend2.jpg" alt />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/recommend3.jpg" alt />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">	
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/recommend1.jpg" alt />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/recommend2.jpg" alt />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/recommend3.jpg" alt />
                <h2>$56</h2>
                <p>Easy Polo Black Edition</p>
                <button type="button" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
      <i className="fa fa-angle-left" />
    </a>
    <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
      <i className="fa fa-angle-right" />
    </a>			
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
