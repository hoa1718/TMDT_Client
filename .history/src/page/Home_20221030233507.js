import Header from "../component/Header";
import Carousel from "../component/Carousel";
import Category from "../component/Category";
function Home() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <section>
        <div className="container">
          <div className="row">
            <Category></Category>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
