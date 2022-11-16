import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase"

function ImageFromFireBase({id}) {
    const [imgUrl, setImgUrl] = useState(null)

    const getUrlFromFirebase = async () => {
        const res = await listAll(ref(storage, `${id}`));
        const imgRef = res.items[0];
        const url = await getDownloadURL(imgRef);
        await setImgUrl(url)
      };

    useEffect(()=>{
        getUrlFromFirebase()
    },[id])
  return <img  src={imgUrl}></img>;
}

export default ImageFromFireBase;