import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    console.log(cart.find(item));
    // cart.push(item);
    // ReactSession.set("cart",cart);
}
export default addToCart;