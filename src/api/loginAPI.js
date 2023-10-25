import axios from "axios";
import {AURORA_API} from "~/app/constants";
const USER_MANAGEMENT_API = "http://localhost:8080/api";

export const login = async (loginData) => {
  let result = null;
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/login`, loginData);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const loginWithGoogle = async (credential) => {
  let result = null;
  try {
    result = await axios.post(`${AURORA_API}/google-login`,credential);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const register = async (registerData) => {
  let result = null;
  try {
    result = await axios.post(
      `${USER_MANAGEMENT_API}/register-user`,
      registerData
    );
    console.log(result);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};

export const logout = async (token) => {
  let result = null;
  try {
    result = await axios.post(
      `${USER_MANAGEMENT_API}/logout`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (e) {
    result = e.response;
    console.log(e);
  }
  return result;
};
