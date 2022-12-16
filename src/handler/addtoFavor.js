import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

const addToFavor = (item) => {
    if(ReactSession.get('user')===undefined){
        alert("Vui lòng đăng nhập !");
        return;
    }
  let favor = ReactSession.get(`favor-${ReactSession.get('user').IdTaiKhoan}`) || [];
  const found = favor.find((e) => e.IdSanPham === item.IdSanPham);
  if (found === undefined) {
    favor.push(item);
    ReactSession.set(`favor-${ReactSession.get('user').IdTaiKhoan}`, favor);
    alert(`Đã thêm sản phẩm vào yêu thích`);
  } else {
    alert(`Đã có ${item.Ten[0]} trong yêu thích`);
    // cart[i].Quantity+=1;
    // ReactSession.set("cart",cart);
  }
};
export default addToFavor;
