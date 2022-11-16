import Recent from "../component/Recent";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SP_Detail from "../component/SanPham_Detail";
function Detail() {
  return (
    <>
      <Header></Header>
      <section>
        <div className="container">
          <div className="row">
            <div class="col-sm-12">
              <SP_Detail></SP_Detail>
              <Recent></Recent>
            </div>
          </div>
        </div>
      </section>
      
        
      </div>
      <Footer></Footer>
    </>
  );
}
export default Detail;
