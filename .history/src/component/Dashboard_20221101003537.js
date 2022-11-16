import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function Dashboard() {
  const [items, setItems] = useState([]);
  const getItems =async () => {
    await axios.get("http://localhost:4000/SanPham/").then(async(res) => {
      console.log(res.data.data);
      await setItems(res.data.data);  
    });
  };
  
  const itemsElement = async(list) => {
    await Object.keys(list).map((item, i) => {
      return (
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/product1.jpg" alt />
                <h2>aaa</h2>
                <Link>
                  <p>{item.Ten[0]}</p>
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
                  <a href="#">
                    <i className="fa fa-plus-square" />
                    Thêm yêu thích
                  </a>
                </li>
                <li>
                  <a href="#">
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
  useEffect(itemsElement(items),[items])
  return (
    <div className="features_items">
      {/*features_items*/}
      <h2 style={{ lineHeight: "25px" }} className="title text-center">
        Nổi bật
      </h2>
      {itemsElement(items)}
    </div>
  );
}

export default Dashboard;
