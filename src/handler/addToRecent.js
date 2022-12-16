import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

const addToRecent = (item) => {
  let recent = ReactSession.get("recent") || [];
  const found = recent.findIndex((e) => e.IdSanPham === item.IdSanPham);
  if (found === -1) {
    recent.unshift(item);
    ReactSession.set(`recent`, recent);
  } else {
    recent.splice(found,1);
    recent.unshift(item);
    ReactSession.set(`recent`, recent);
  }
};
export default addToRecent;