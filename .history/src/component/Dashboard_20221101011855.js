import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
function Dashboard() {
  const [items, setItems] = useState([]);
  var getItems =  () => {
      axios.get("http://localhost:4000/SanPham/").then((res) => {
       setItems(res.data.data);  
       console.log(items);
    });
  };
  useEffect(()=>{getItems();},[])
  const itemsElement = async(list) => {
     await Object.keys(list).map( (item, i) => {
       return (
       <div>
  <div classname="col-sm-4">
    <div classname="product-image-wrapper">
      <div classname="single-products">
        <div classname="productinfo text-center">
          <img src="images/home/product1.jpg" alt />
          <h2>aaa</h2>
          <link />
          <p>{'{'}'{'{'}'{'}'}item{'{'}'{'}'}'{'}'}</p>
          <a href="#" classname="btn btn-default add-to-cart">
            <i classname="fa fa-shopping-cart">
              Thêm vào giỏ
            </i></a><i classname="fa fa-shopping-cart">
          </i></div><i classname="fa fa-shopping-cart">
        </i></div><i classname="fa fa-shopping-cart">
        <div classname="choose">
          <ul classname="nav nav-pills nav-justified">
            <li>
              <a href="#">
                <i classname="fa fa-plus-square">
                  Thêm yêu thích
                </i></a><i classname="fa fa-plus-square">
              </i></li><i classname="fa fa-plus-square">
              <li>
                <a href="#">
                  <i classname="fa fa-plus-square">
                    So sánh
                  </i></a><i classname="fa fa-plus-square">
                </i></li><i classname="fa fa-plus-square">
              </i></i></ul><i classname="fa fa-plus-square"><i classname="fa fa-plus-square">
            </i></i></div><i classname="fa fa-plus-square"><i classname="fa fa-plus-square">
          </i></i></i></div><i classname="fa fa-shopping-cart"><i classname="fa fa-plus-square"><i classname="fa fa-plus-square">
        </i></i></i></div><i classname="fa fa-shopping-cart"><i classname="fa fa-plus-square"><i classname="fa fa-plus-square">
      </i></i></i></div>

      );
    });
  };
  
  if (items === undefined ) return null;
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
