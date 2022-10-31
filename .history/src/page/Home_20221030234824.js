import Header from "../component/Header";
import Carousel from "../component/Carousel";
import Category from "../component/Category";
import Dashboard from "../component/Dashboard";
function Home() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <section>
        <div className="container">
          <div className="row">
            <Category></Category>
            <div class="col-sm-9 padding-right"></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
