import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const forgotPassword = async (email) => {
  let result = null;
  try {
    result = await axios.post(`${AURORA_API}/users/forgot-password`, email);
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
    result = await axios.post(`${AURORA_API}/users/change-password`, data, {
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
    result = await axios.get(`${AURORA_API}/users`, {
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
    result = await axios.put(`${AURORA_API}/users`, data, {
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
    result = await axios.get(`${AURORA_API}/users/count`, {
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
