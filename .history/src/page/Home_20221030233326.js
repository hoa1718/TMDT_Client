import Header from "../component/Header";
import Carousel from "../component/Carousel";
import Ca
function Home() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <section>
        <div class="container">
          <div class="row">
            <Category></Category>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
