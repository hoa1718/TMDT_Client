import axios from "axios";

import { useState, useEffect } from "react";
function Category() {
  const [phim, setPhim] = useState([]);
  const [hang, setHang] = useState([]);
  const getPhim = async () => {
    axios
      .get("http://localhost:5000/Phim/")
      .then(async (res) => {
        await setPhim(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getHang = async () => {
    axios
      .get("http://localhost:5000/Hang/")
      .then(async (res) => {
        await setHang(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const displayPhim = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <div className="panel panel-default" key={i}>
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordian"
                onClick={() => {window.location.href="/SanPham/Phim/"+phim[item].IdPhim}}
              >
                {phim[item].TenPhim}
              </a>
              <span className="badge pull-right">({phim[item].SoSP})</span>
            </h4>
          </div>
        </div>
      );
    });
  };
  const displayHang = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <li key={i}>
        <a onClick={() => {window.location.href="/SanPham/Phim/"+hang[item].IdHangSx}}>
          <span className="pull-right">({hang[item].SoSP})</span>{hang[item].Ten}
        </a>
      </li>
      );
    });
  };
  useEffect(() => {
    getPhim();
    getHang();
  }, []);
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2 style={{ lineHeight: "25px" }}>Phim</h2>
        <div className="panel-group category-products" id="accordian">
          {displayPhim(phim)}
        </div>
        {/*/category-products*/}
        <div className="brands_products">
          <h2>Hãng</h2>
          <div className="brands-name">
          <ul className="nav nav-pills nav-stacked">
             {displayHang(hang)}
           
          </ul>
        </div>
         
        </div>
        {/*/brands_products*/}
      </div>
    </div>
  );
}
export default Category;
