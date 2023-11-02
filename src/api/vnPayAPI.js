import axios from "axios";
import {VN_PAY_API} from "~/app/constants";

export const createOrder = async (data) => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.post(`${VN_PAY_API}/order`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }); 
  } catch (e) {
    result = e.response;
  }
  return result;
};
