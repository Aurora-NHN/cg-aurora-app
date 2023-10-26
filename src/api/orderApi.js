import axios from "axios";
const ORDER_API = "http://localhost:8080/api/order";
const API_PROVINCE = "https://vapi.vnappmob.com/api/province/";
const API_DISTRICT = "https://vapi.vnappmob.com/api/province/district/";
const API_WARD = "https://vapi.vnappmob.com/api/province/ward/";

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
