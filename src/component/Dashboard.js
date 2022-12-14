import { Link,} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageFromFireBase from "./ImgFirebase.js";
import formatter from '../changeCurrency'
import addToCart from '../handler/addToCart.js'
import addToFavor from "../handler/addtoFavor.js";
import addToRecent from "../handler/addToRecent.js";
function Dashboard() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    axios
      .get("http://localhost:5000/SanPham/")
      .then(async (res) => {
        await setItems(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getItems()
  },[]);
  const displayItem = (list) => {
    return Object.keys(list).map((item, i) => {
      if(Number(items[item].An)===1) return null;
      if(item>=6 ) return;
      return (      
        <div className="col-sm-4" key={item}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                {items[item]&&<ImageFromFireBase id={items[item].IdSanPham} />}
                <h2>{formatter.format(Number(items[item].GiaNhap * 1.4))}</h2>
                <Link to={'/SanPham/'+items[item].IdSanPham} state={{detail: items[item]}} onClick={()=>{addToRecent(items[item])}} >
                  <p>{items[item].Ten[0]}</p>
                </Link>
                <button className="btn btn-default add-to-cart" onClick={()=>addToCart(items[item])}>
                  <i className="fa fa-shopping-cart" />
                  Thêm vào giỏ
                </button>
              </div>
            </div>
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <a onClick={()=>addToFavor(items[item])}>
                   <i class="fa-solid fa-heart"></i>
                    Yêu thích
                  </a>
                </li>
                <li>
                  <a>
                  <i class="fa-solid fa-code-compare"></i>
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

  return (
    <div className="features_items">
      {/*features_items*/}
      <h2 style={{ lineHeight: "25px" }} className="title text-center">
        Nổi bật
      </h2>
      {displayItem(items)}
    </div>
  );
}

export default Dashboard;
