import Category from "../component/Category";
import Header from "../component/Header";
function SanPham() {
  return (
    <>
      <Header></Header>
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
export default SanPham;
