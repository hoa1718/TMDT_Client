import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function Dashboard() {
  const [items, setItems] = useState([]);
  var getItems =  () => {
       axios.get("http://localhost:4000/SanPham/").then(async (res) => {
       await setItems(()=>[...items,res.data.data]);  
    })
    .catch(function (error) {
      console.log(error);
   });;
  };
  useEffect(()=>{getItems();},[])
  const itemsElement = (list) => {
      Object.keys(list).map( (item, i) => {
        console.log(item.Ten[0]);
       return (
        <div className="col-sm-4">
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img src="images/home/product1.jpg" alt />
                <h2>aaa</h2>
                <Link>
                  <p>{item}</p>
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
  
  if (items === [] ) return null;
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
