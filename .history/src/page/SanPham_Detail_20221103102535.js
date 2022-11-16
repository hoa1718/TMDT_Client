import Recent from "../component/Recent";
import Header from "../component/Header";
import SP_Detail from "../component/SanPham_Detail";
import Review from "../component/Review";
import Category from "../component/Category";
function Detail() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <Category></Category>
            <div className="col-sm-9 padding-right">
              <SP_Detail></SP_Detail>
              
              <Review ></Review>
              <Recent title={"Liên quan"}></Recent>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Detail;
