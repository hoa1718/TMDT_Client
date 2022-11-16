import axios from "axios";
import { useState, useEffect } from "react";
function Category() {
  const [phim, setPhim] = useState([]);
  const [hang, setHang] = useState([]);
  const getPhim = async () => {
    axios
      .get("http://localhost:4000/Phim/")
      .then(async (res) => {
        await setPhim(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getHang = async () => {
    axios
      .get("http://localhost:4000/Hang/")
      .then(async (res) => {
        await setPhim(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const displayPhim = (list) => {
    return Object.keys(list).map((item, i) => {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">
              <a
                data-toggle="collapse"
                data-parent="#accordian"
                href="#sportswear"
              >
                {phim[item].TenPhim}
              </a>
              <span class="badge pull-right">({phim[item].SoSP})</span>
            </h4>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    getPhim();
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
          {/*brands_products*/}
          <h2>Hãng</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(50)</span>Acne
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span className="pull-right">(4)</span>Rösch creative culture
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*/brands_products*/}
      </div>
    </div>
  );
}
export default Category;
