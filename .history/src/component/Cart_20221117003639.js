import { Link } from "react-router-dom";
import { ReactSession } from "react-client-session";
import { useState } from "react";
import ImageFromFireBase from "../component/ImgFirebase";
import formatter from "../changeCurrency";
function Cart(){
    const [items, setItems] = useState(ReactSession.get("cart"));
    const [total,setTotal]=useState(()=>{
        let temp=0;
        if(ReactSession.get("cart")===undefined){return temp}
        ReactSession.get("cart").forEach((item,i)=>{
          temp+=item.Quantity * (item.GiaNhap * 1.4);
        })
        return temp;
      })
      return
}
export default Cart;