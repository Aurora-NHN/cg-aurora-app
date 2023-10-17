import axios from "axios";
const VN_PAY_API = "http://localhost:8080/api";

export const createOrder = async (data) => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.post(`${VN_PAY_API}/vnpay-order`, data, {
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
    result = await axios.get(`${VN_PAY_API}/vnpay/status`,{
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (e) {
    result = e.response;
  }
  return result;
};
