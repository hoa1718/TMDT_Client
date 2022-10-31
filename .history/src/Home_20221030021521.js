import Header from "../component/Header"
import Carousel from "../component/Carousel"
import './jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
function Home(){
    return(
        <>
            <Header></Header>
            <Carousel></Carousel>
        </>
    )
}
export default Home