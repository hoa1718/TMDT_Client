import axios from "axios";
import { useState } from "react";
function Category() {
  const [phim, setPhim] = useState([]);
  const getItems = async () => {
    axios
      .get("http://localhost:4000/Phim/")
      .then(async (res) => {
        await setPhim(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2 style={{lineHeight:"25px"}}>Phim</h2>
        <div className="panel-group category-products" id="accordian">
          {/*category-productsr*/}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#sportswear"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus" />
                  </span>
                  Sportswear
                </a>
              </h4>
            </div>  
          </div>
            
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Kids</a>
              </h4>
            </div>
          </div>
          
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a href="#">Shoes</a>
              </h4>
            </div>
          </div>
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
