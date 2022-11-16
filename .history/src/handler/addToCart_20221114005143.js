import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = (item)=>{
    let cart =ReactSession.get("cart") || [];
    // cart.push(item);
    // ReactSession.set("cart",cart);
    // console.log(ReactSession.get("cart"));
}
export default addToCart;