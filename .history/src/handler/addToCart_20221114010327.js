import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    const found=cart.find(e=>e.IdSanPham===item.IdSanPham);
    if (found ===undefined){
        item['quantity']=1
        cart.push(item);
        ReactSession.set("cart",cart);
    }
    
}
export default addToCart;