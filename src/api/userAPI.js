import axios from "axios";
import {USER_MANAGEMENT_API} from "~/app/constants";

export const forgotPassword = async (email) => {
  let result = null;
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/forgot-password`, email);
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
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const getUserInfo = async () => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.get(`${USER_MANAGEMENT_API}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const editUserInfo = async (data) => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.put(`${USER_MANAGEMENT_API}`, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};
export const getCountOfUser= async () => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.get(`${USER_MANAGEMENT_API}/count`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};
