import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    const found=cart.find(e=> e.IdSanPham===item.IdSanPham);
    const i= cart.indexOf(found);
    if (found ===undefined){
        item['quantity']=Number(1);
        cart.push(item);
        ReactSession.set("cart",cart);
    }
    else{
        cart[i].quantity+=1;
        ReactSession.set("cart",cart);
    }
    
}
export default addToCart;