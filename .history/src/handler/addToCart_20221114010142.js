import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    const found=cart.find(e=>e.IdSanPham===item.IdSanPham);
    ì
}
export default addToCart;