import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import Delayed from "./Delay";
function ImageDetail({ id }) {
  const [imgUrl, setImgUrl] = useState([]);
//   const getUrlFromFirebase = async () => {
//     const res = await listAll(ref(storage, `${id}`));
//     res.items.map(async (item, i) => {
//       const imgRef = res.items[i];
//       if (imgRef === null) return null;
//       const url = await getDownloadURL(imgRef);
//       await setImgUrl([...imgUrl, url]);
//     });
//   };
// const fetchImage = () => {
//     listAll(ref(storage, `${id}`)).then((res) => {
//       res.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImgUrl((pre) => {
//             if (!pre.some((item) => item.url === url))
//               return [...pre, url];
//             return [...pre];
//           });
//         });
//       });
//     });
//   };
const fetchImages = async () => {
      const res = await listAll(ref(storage, `${id}`));
      let urlPromises = res.items.map(imageRef => getDownloadURL(imageRef));
      return Promise.all(urlPromises);

  }
 const loadImages = async () => {
    const urls = await fetchImages();
    setImgUrl(urls);
}
const showImg=()=>{
  let slides = document.getElementsByClassName("mySlides");
}
  useEffect(() => {
    loadImages();
  }, []);

  {if(imgUrl !== [])return imgUrl.map((item, i) => {
      return (
          <img src={item} onClick={} ></img>       
      );
  })};
}
  


export { ImageDetail };
