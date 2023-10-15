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
    console.log("result: ");
    console.log(result);  
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const orderReturn = async () => {
  let result = null;
  try {
    result = await axios.get(`${VN_PAY_API}/vnpay-payment`);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};
