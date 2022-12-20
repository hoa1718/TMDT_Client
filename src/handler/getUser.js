import axios from "axios";
import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const getUser= async(id)=>{
    axios.get("https://tmdt-client.onrender.com/KhachHang/search/"+id)
    .then(async(res)=>{
        ReactSession.set('user',res.data.data[0]);
    })
}
export default getUser;