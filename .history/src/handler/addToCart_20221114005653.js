import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    console.log(item);
    cart.push(item);
    lo
    // ReactSession.set("cart",cart);
    // console.log(ReactSession.get("cart"));
}
export default addToCart;