import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase"
function ImageDetail({id,number}) {
    const [imgUrl, setImgUrl] = useState([])
    const getUrlFromFirebase = async () => {
        const res = await listAll(ref(storage, `${id}`));
        ref.item((item,i)=>{
          
        })
        const imgRef = res.items[number];
        if(imgRef === null) return null;
        const url = await getDownloadURL(imgRef);
        await setImgUrl([...imgUrl,url])
        
      };

    useEffect(()=>{
        getUrlFromFirebase()
    },[id])
  return(imgUrl.map((item,i)=>{
    return <img src={imgUrl[i]}></img>;
  })  
  )
}

export  {ImageDetail};