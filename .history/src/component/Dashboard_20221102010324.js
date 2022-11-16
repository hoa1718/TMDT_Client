import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../firebase.js";
import { getDownloadURL, listAll, ref } from "firebase/storage";
function Dashboard() {
  const [items, setItems] = useState([]);
  const [imageUrl, setImages] = useState([]);

  const ImageFromFireBase = async (id) => {
    const res = await listAll(ref(storage, `${id}`));
    const imgRef = res.items[0];
    const url = await getDownloadURL(imgRef);
    return await url
  };
  const imgElement= (url)=>{
    return(
      <img src={url} alt="image"></img>
    )
  }
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
  useEffect(() => {
    getItems();
  }, []);
  const itemsElement = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <div className="col-sm-4" key={item}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                {imgElement(ImageFromFireBase(items[item].IdSanPham))}
                <h2>aaa</h2>
                <Link>
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

  if (!items) return null;
  if (images === []) return null;
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
