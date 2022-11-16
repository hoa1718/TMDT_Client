import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import Delayed from "./Delay";
// function ImageDetail({ id }) {
//   const [imgUrl, setImgUrl] = useState([]);
//   const getUrlFromFirebase = async () => {
//     const res = await listAll(ref(storage, `${id}`));
//     res.items.map(async (item, i) => {
//       const imgRef = res.items[i];
//       if (imgRef === null) return null;
//       const url = await getDownloadURL(imgRef);
//       await setImgUrl([...imgUrl, url]);
//     });
//   };
const ImageDetail=(id)=>{
  const [imgUrl, setImgUrl] = useState([]);
  const fetchImage=(id)=>{
    listAll(ref(storage, `${id}`)).then(res=>{
      res.items.forEach((item)=>{
        const name = item._location.path_;
        getDownloadURL(item).then(url)=>{
          set
        }
      })
    })
  }
  useEffect(() => {
    getUrlFromFirebase();
  }, [id]);
  return imgUrl.map((item, i) => {
    console.log(item);
      // return (
      //     item[i]&&<div className="mySlides">
      //     <div className="numbertext">{i + 1}/{imgUrl.length}</div> 
      //     <img src={item}></img>
      //     <div className="text">Caption Text</div>
      //   </div>    
      // );
  });
}
  


export { ImageDetail };
