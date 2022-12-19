import axios from "axios";
import { ReactSession } from "react-client-session";
ReactSession.setStoreType("localStorage");
const getUser= async(id)=>{
    axios.get("http://localhost:5000/KhachHang/search/"+id)
    .then(async(res)=>{
        ReactSession.set('user',res.data.data[0]);
    })
}
export default getUser;