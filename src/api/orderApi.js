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
    result = await axios.post(
      `${ORDER_API}/save-order`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};


export const provincesAPI = async () => {
  let result = null;
  try {
    result = await axios.get(`${API_PROVINCE}`);
  } catch (e) {
    console.log(e);
  }
  return result;
};

export const districtAPI = async () => {
  let result = null;
  try {
    result = await axios.get(`${API_PROVINCE}`);
  } catch (e) {
    console.log(e);
  }
  return result;
};
export const wardAPI = async () => {
  let result = null;
  try {
    result = await axios.get(`${API_PROVINCE}`);
  } catch (e) {
    console.log(e);
  }
  return result;
};
