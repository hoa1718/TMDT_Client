function Category() {
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2 style={{lineHeight:"25px"}}>Thể loại</h2>
        <div className="panel-group category-products" id="accordian">
          {/*category-productsr*/}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#sportswear"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus" />
                  </span>
                  Sportswear
                </a>
              </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="#">Nike </a>
                  </li>
                  <li>
                    <a href="#">Under Armour </a>
                  </li>
                  <li>
                    <a href="#">Adidas </a>
                  </li>
                  <li>
                    <a href="#">Puma</a>
                  </li>
                  <li>
                    <a href="#">ASICS </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Kids</a>
              </h4>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Shoes</a>
              </h4>
            </div>
          </div>
        </div>
        {/*/category-products*/}
        <div className="brands_products">
          {/*brands_products*/}
          <h2>Hãng</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(50)</span>Acne
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(4)</span>Rösch creative culture
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*/brands_products*/}
        <div className="price-range">
          {/*price-range*/}
          <h2>Price Range</h2>
          <div className="well text-center">
            <input
              type="text"
              className="span2"
              defaultValue
              data-slider-min={0}
              data-slider-max={600}
              data-slider-step={5}
              data-slider-value="[250,450]"
              id="sl2"
            />
            <br />
            <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
          </div>
        </div>
        {/*/price-range*/}
        <div className="shipping text-center">
          {/*shipping*/}
          <img src="images/home/shipping.jpg" alt />
        </div>
        {/*/shipping*/}
      </div>
    </div>
  );
}
export default Category;
