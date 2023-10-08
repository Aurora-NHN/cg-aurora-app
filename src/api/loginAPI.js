import axios from "axios";
const USER_MANAGEMENT_API = "http://localhost:8080/api";

export const login = async (loginData) => {
  let result = null;
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/login`, loginData);
    // console.log(result);
  } catch (e) {
    console.log(e);
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

export const logout = async () => {
  let result = null;
  let token = JSON.parse(localStorage.getItem("token"));
  try {
    result = await axios.post(
      `${USER_MANAGEMENT_API}/logout`,{
            headers:{
                Authorization: 'Bearer ' + token
            }}
    );
    console.log(result);
  } catch (e) {
    console.log(e);
    result = e.response;
  }
  return result;
};