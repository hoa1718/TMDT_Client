import Recent from "../component/Recent";
import Header from "../component/Header";
import SP_Detail from "../component/SanPham_Detail";
import Review from "../component/Review";
import Ca
function Detail() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <
            <div class="col-sm-9 padding-right">
              <SP_Detail></SP_Detail>
              <Review></Review>
              <Recent></Recent>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Detail;
