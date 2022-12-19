import Header from "../component/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
import addToCart from "../handler/addToCart";
import { Link } from "react-router-dom";
function Favorite() {
  ReactSession.setStoreType("localStorage");
  let navigate=useNavigate();
  const [favor, setFavor] = useState(()=>{
    if(ReactSession.get('user')!== undefined){
      if( ReactSession.get(`favor-${ReactSession.get("user").IdTaiKhoan}`) !==undefined){
        return ReactSession.get(`favor-${ReactSession.get("user").IdTaiKhoan}`)}
      }
    return [];  
  }
  );
  const displayFavor = (list) => {
    return Object.keys(list).map((item, index) => {
      return (
        <tr key={item} className="favor">
          <td style={{ width: "150px" }}>
            <ImageFromFireBase id={list[item].IdSanPham} />
          </td>
          <td>
            <Link
              to={"/SanPham/" + list[item].IdSanPham}
              state={{ detail: list[item] }}
            > {list[item].Ten[0]}</Link>
        
           
          </td>
          <td style={{ width: "150px" }}>
            {formatter.format(Number(list[item].GiaNhap * 1.4))}
          </td>
          <td>
            <button
              type="button"
              className="btn favorite circle"
              style={{ marginLeft: "0px", background: "#fe980f" }}
              onClick={() => addToCart(list[item])}
            >
              <i className="fa fa-shopping-cart" />
            </button>
            <button type="button" className="btn compare circle">
              <i className="fa fa-solid fa-code-compare"></i>
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            {ReactSession.get('user') ? 
            <>
            <h2 className="userTitle">Danh sách yêu thích</h2>
            <div className="col-sm-8">
           <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>{displayFavor(favor)}</tbody>
              </table> 
             
            </div></>: <div className="register-req">
              <Link
                className="btn btn-primary"
                style={{ marginTop: "0px" }}
                to="/Login"
              >
                Đăng nhập
              </Link>
            </div>
            }
          </div>
        </div>
      </section>
    </>
  );
}
export default Favorite;
