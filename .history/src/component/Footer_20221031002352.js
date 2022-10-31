function Footer() {
  return (
    <footer id="footer">
      {/*Footer*/}
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Giới thiệu</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">Thông tin cửa hàng</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Cách thức thanh toán</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Điều khoản</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <a href="#">Điều khoản & điều kiện</a>
                  </li>
                  <li>
                    <a href="#">Chính sách mua hàng</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="single-widget">
                <h2>Thông tin</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    
                  </li>
                  <li>
                    <a href="#">Privecy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Billing System</a>
                  </li>
                  <li>
                    <a href="#">Ticket System</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-sm-3 col-sm-offset-2">
              <div className="single-widget">
                <h2>About Shopper</h2>
                <form action="#" className="searchform">
                  <input type="text" placeholder="Your email address" />
                  <button type="submit" className="btn btn-default">
                    <i className="fa fa-arrow-circle-o-right" />
                  </button>
                  <p>
                    Get the most recent updates from <br />
                    our site and be updated your self...
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <p className="pull-left">
              Copyright © 2013 E-SHOPPER Inc. All rights reserved.
            </p>
            <p className="pull-right">
              Designed by{" "}
              <span>
                <a target="_blank" href="http://www.themeum.com">
                  Themeum
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
