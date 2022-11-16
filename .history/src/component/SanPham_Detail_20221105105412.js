import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {ImageDetail} from "./ImageDetail";
import Delay from './Delay'
function Detail({ props }) {
  const location = useLocation();
  const detail = location.state.detail;
  const [slideIndex, setSlideIndex] = useState(1);
  const [imageUrl, setImageUrl] = useState([]);
  function plusSlides(n) {
    let newSlide = slideIndex + n;
    if (newSlide > 3) {
      newSlide = 1;
    }
    setSlideIndex(newSlide);
    showSlides(newSlide);
  }
  function minusSlides(n) {
    let newSlide = slideIndex - n;
    if ((newSlide <= 0)) {
      newSlide = 3;
    }
    setSlideIndex(newSlide);
    showSlides(newSlide);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // if(n>3){n=1}
    // else if(n<1){n=3}
    for (i = 0; i < slides.length; i++) {
      if (i === n - 1) {
        continue;
      }
      slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
  }
  useEffect(() => {
    showSlides(1);
  }, [detail.IdSanPham]);

  return (
    <Delay>

    </Delay>
    
  );
}
export default Detail;
