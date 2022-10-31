import OP from "../op.png"
import OP from "../op.png"
function Carousel() {
  return (
    <section id="slider">
      {/*slider*/}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="slider-carousel"
              className="carousel slide"
              data-ride="carousel"
              style={{height:"350px"}}
            >
              <div className="carousel-inner">
                <div className="item active">
                  <div className="col-sm-6">
                    <h1>
                      <span style={{color:"#048ED6"}}>ONE</span>-PIECE
                    </h1>     
                    <h2>Oda Eiichiro</h2>
                    <button type="button" className="btn btn-default get">
                      Xem ngay
                    </button>
                  </div>
                  <div className="col-sm-6" >
                    <img
                      src={OP}
                      className="img-responsive"
                      alt="movie"
                      style={{paddingTop:"80px"}}
                    />
                  </div>
                </div>
                <div className="item ">
                  <div className="col-sm-6">
                    <h1>
                      <span>NARUTO</span>
                    </h1>     
                    <h2>Kishimoto Masashi.</h2>
                    <button type="button" className="btn btn-default get">
                      Xem ngay
                    </button>
                  </div>
                  <div className="col-sm-6" >
                    <img
                      src={OP}
                      className="img-responsive"
                      alt="movie"
                      style={{paddingTop:"80px"}}
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="col-sm-6">
                    <h1>
                      <span style={{color:"#048ED6"}}>ONE</span>-PIECE
                    </h1>     
                    <h2>Oda Eiichiro</h2>
                    <button type="button" className="btn btn-default get">
                      Xem ngay
                    </button>
                  </div>
                  <div className="col-sm-6" >
                    <img
                      src={OP}
                      className="img-responsive"
                      alt="movie"
                      style={{paddingTop:"80px"}}
                    />
                  </div>
                </div>
              </div>
              <a
                href="#slider-carousel"
                className="left control-carousel hidden-xs"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                href="#slider-carousel"
                className="right control-carousel hidden-xs"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Carousel;
