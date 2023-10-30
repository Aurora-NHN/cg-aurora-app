import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const createOrder = async (data) => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.post(`${AURORA_API}/vnpay-order`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }); 
  } catch (e) {
    result = e.response;
  }
  return result;
};

export const getStatus = async () => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.get(`${AURORA_API}/vnpay/status`,{
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (e) {
    result = e.response;
  }
  return result;
};
