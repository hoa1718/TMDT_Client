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
}
  useEffect(() => {
    getUrlFromFirebase();
  }, [id]);
  


export { ImageDetail };
