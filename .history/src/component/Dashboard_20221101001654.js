import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
function Dashboard() {
  
  const getItems =()=>{
    axios.get("http://localhost:4000/SanPham/")
         .then((res)=>{
          setItems(res)
         })
  }
  const itemsElement=()=>{
    items.map((item,i)=>{
      return(
        <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product1.jpg" alt />
              <h2>$56</h2>
              <Link><p>Easy Polo Black Edition</p></Link>
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
      )
    })
  }
  const [items,setItems]= useState(getItems);
  return (
    <div className="features_items">
      {/*features_items*/}
      <h2 style={{lineHeight:"25px"}} className="title text-center">Nổi bật</h2>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product1.jpg" alt />
              <h2>$56</h2>
              <Link><p>Easy Polo Black Edition</p></Link>
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
     
      
      
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product5.jpg" alt />
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
            <img src="images/home/sale.png" className="new" alt />
          </div>
          <div className="choose">
            <ul className="nav nav-pills nav-justified">
              <li>
                <a href="#">
                  <i className="fa fa-plus-square" />
                  Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square" />
                  Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-image-wrapper">
          <div className="single-products">
            <div className="productinfo text-center">
              <img src="images/home/product6.jpg" alt />
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
                <a href="#">
                  <i className="fa fa-plus-square" />
                  Add to wishlist
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-plus-square" />
                  Add to compare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
