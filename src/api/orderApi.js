import axios from "axios";
import {API_PROVINCE, ORDER_API} from "~/app/constants";


export const createOrderDetailAPI = async (address, token) => {
  let result = null;
  try {
    result = await axios.post(`${ORDER_API}/create-order-detail`, address, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
};
export const createOrderAPI = async (token) => {
  let result = null;
  try {
    result = await axios.get(`${ORDER_API}/save`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
};
