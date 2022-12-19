import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState } from "react";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
import addToCart from "../handler/addToCart";
function Recent({ title }) {
  ReactSession.setStoreType("localStorage");
  const [items, setItems] = useState(ReactSession.get("recent"));
  const displayItems = (list) => {
    if (list === undefined) return;
    return Object.keys(list).map((item, index) => {
      return (
        <div className="col-sm-4" key={item}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                {items[item] && (
                  <ImageFromFireBase id={items[item].IdSanPham} />
                )}
                <h2>{formatter.format(Number(items[item].GiaNhap * 1.4))}</h2>
                <Link to={'/SanPham/'+items[item].IdSanPham} state={{detail: items[item]}}>
                  <p>{items[item].Ten[0]}</p>
                </Link>
                <button className="btn btn-default add-to-cart" onClick={()=>addToCart(items[item])}>
                  <i className="fa fa-shopping-cart" />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="recommended_items" style={{ overflow: "inherit" }}>
      <h2 style={{ lineHeight: "25px" }} className="title text-center">
        {title}
      </h2>
      <div
        id="recommended-item-carousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="item active">{displayItems(items)}</div>
        </div>
        <a
          className="left recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left" />
        </a>
        <a
          className="right recommended-item-control"
          href="#recommended-item-carousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right" />
        </a>
      </div>
    </div>
  );
}
export default Recent;
