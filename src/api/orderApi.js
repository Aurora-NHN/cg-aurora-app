import axios from "axios";
import {AURORA_API} from "~/app/constants";

const API_PROVINCE = "https://vapi.vnappmob.com/api/province/";
const API_DISTRICT = "https://vapi.vnappmob.com/api/province/district/";
const API_WARD = "https://vapi.vnappmob.com/api/province/ward/";


export const createOrderDetailAPI = async (address, token) => {
  let result = null;
  try {
    result = await axios.post(`${AURORA_API}/order/create-order-detail`, address, {
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
    result = await axios.get(`${AURORA_API}/order/save`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
};
