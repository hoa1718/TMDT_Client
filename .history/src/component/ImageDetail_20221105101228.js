import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase"

function ImageDetail({id,number}) {
    const [number,setNumber]=useState(0);
    const [imgUrl, setImgUrl] = useState(null)
    const getUrlFromFirebase = async () => {
        const res = await listAll(ref(storage, `${id}`));
        const imgRef = res.items[number];
        if(imgRef === null) return null;
        const url = await getDownloadURL(imgRef);
        await setImgUrl(url)
        setNumber()
      };

    useEffect(()=>{
        getUrlFromFirebase()
    },[id])
  return <img src={imgUrl}></img>;
}

export default ImageDetail;
export {}