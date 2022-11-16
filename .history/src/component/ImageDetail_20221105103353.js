import { async } from "@firebase/util";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase"
function ImageDetail({id,number}) {
    const [imgUrl, setImgUrl] = useState([])
    const getUrlFromFirebase = async () => {
        const res = await listAll(ref(storage, `${id}`));
        ref.item(async(item,i)=>{
          const imgRef = res.items[i];
          if(imgRef === null) return null;
          const url = await getDownloadURL(imgRef);
          await setImgUrl([...imgUrl,url])
        })
      };

    useEffect(()=>{
        getUrlFromFirebase();console.log();
    },[id])
  return(imgUrl.map((item,i)=>{
    return <img src={imgUrl[i]}></img>;
  })  
  )
}

export  {ImageDetail};