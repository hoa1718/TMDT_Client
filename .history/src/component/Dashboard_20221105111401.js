import { Link,} from "react-router-dom";
import { useState, useEffect } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
import axios from "axios";
import ImageFromFireBase from "./ImgFirebase.js";
function Dashboard() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    axios
      .get("http://localhost:4000/SanPham/")
      .then(async (res) => {
        await setItems(res.data.data);
        return items;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  function ImageDetail( id ) {
    const [imgUrl, setImgUrl] = useState([]);
    const getUrlFromFirebase = async () => {
      const res = await listAll(ref(storage, `${id}`));
      res.items.map(async (item, i) => {
        const imgRef = res.items[i];
        if (imgRef === null) return null;
        const url = await getDownloadURL(imgRef);
        await setImgUrl([...imgUrl, url]);
      });
    get
      return imgUrl

    };}
  useEffect(() => {
    getItems()
  },[]);
  const itemsElement = (list) => {
    return Object.keys(list).map((item, i) => {
      return (      
        <div className="col-sm-4" key={item}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                {items[item]&&<ImageFromFireBase id={items[item].IdSanPham} />}
                <h2>aaa</h2>
                <Link to={'/SanPham/'+items[item].IdSanPham} state={{detail: items[item],image:ImageDetail(items[item].IdSanPham)}} >
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
