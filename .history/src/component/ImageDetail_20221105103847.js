import { async } from "@firebase/util";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
function ImageDetail({ id, number }) {
  const [imgUrl, setImgUrl] = useState([]);
  const getUrlFromFirebase = async () => {
    const res = await listAll(ref(storage, `${id}`));
    res.items.map(async (item, i) => {
      const imgRef = res.items[i];
      if (imgRef === null) return null;
      const url = await getDownloadURL(imgRef);
      await setImgUrl([...imgUrl, url]);
    });
  };

  useEffect(() => {
    getUrlFromFirebase();
  }, [id]);
  if(!imgUrl )return null
  return imgUrl.map((item, i) => {
    return (
      <div className="mySlides">
        <div className="numbertext">{i+1}/ 3</div>{" "}
        <img src={imgUrl[i]}></img> <div className="text">Caption Text</div>
      </div>
    );
  });
}

export { ImageDetail };
