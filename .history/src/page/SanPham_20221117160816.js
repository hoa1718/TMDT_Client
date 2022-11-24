import Category from "../component/Category";
import Header from "../component/Header";
import { useState, useEffect } from "react";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
import { Link } from "react-router-dom";
import axios from "axios";
function SanPham() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    axios
      .get("http://localhost:4000/SanPham/")
      .then(async (res) => {
        await setItems(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const displayItem = (list) => {
    return Object.keys(list).map((item, i) => {
      if(Number(items[item].An)===1) return;  
      return (
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                {items[item] && (
                  <ImageFromFireBase id={items[item].IdSanPham} />
                )}
                <h2>{formatter.format(Number(items[item].GiaNhap * 1.4))}</h2>
                <Link to={'/SanPham/'+items[item].IdSanPham} state={{detail: items[item]}} >
                <p>{items[item].Ten[0]}</p>
                </Link>
                
                <a href="#" className="btn btn-default add-to-cart">
                  <i className="fa fa-shopping-cart" />
                  Thêm vào giỏ
                </a>
              </div>
            </div>
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <a href>
                    <i className="fa fa-plus-square" />
                    Thêm yêu thích
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-plus-square" />
                    So sánh
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    getItems();
  }, []);
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
                <h2 className="title text-center" style={{ marginTop: "5px" }}>
                  Sản Phẩm
                </h2>
                {displayItem(items)}
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
