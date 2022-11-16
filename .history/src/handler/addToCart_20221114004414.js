import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const addToCart = ()=>{
    let cart =ReactSession.get("set");
    
}