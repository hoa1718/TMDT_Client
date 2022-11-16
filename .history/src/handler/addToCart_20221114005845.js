import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    if(cart.find)
    cart.push(item);
    ReactSession.set("cart",cart);
}
export default addToCart;