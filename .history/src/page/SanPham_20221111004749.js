import Category from "../component/Category";
import Header from "../component/Header";
function SanPham() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <Category></Category>
            <div className="col-sm-9 padding-right">
              <div className="features_items">
                {/*features_items*/}
                <h2 className="title text-center" style={}>Sản Phẩm</h2>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product12.jpg" alt />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </a>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <a href="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li>
                          <a href>
                            <i className="fa fa-plus-square" />
                            Add to wishlist
                          </a>
                        </li>
                        <li>
                          <a href>
                            <i className="fa fa-plus-square" />
                            Add to compare
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
              <ul className="pagination">
                  <li className="active">
                    <a href>1</a>
                  </li>
                  <li>
                    <a href>2</a>
                  </li>
                  <li>
                    <a href>3</a>
                  </li>
                  <li>
                    <a href>»</a>
                  </li>
                </ul>
              {/*features_items*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default SanPham;
