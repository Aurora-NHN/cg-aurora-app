import axios from "axios";
const USER_MANAGEMENT_API = "http://localhost:8080/api/users";

export const forgotPassword = async (email) => {
  let result = null;
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/forgot-password`, email);
    // console.log(result);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const changePassword = async (data) => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/change-password`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(result);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const editInfo = async (data) => {
  let result = null;
  try {
    result = await axios.put(`${USER_MANAGEMENT_API}`, data);
    console.log(result);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};