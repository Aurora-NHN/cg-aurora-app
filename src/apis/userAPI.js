import axios from "axios";

const USER_MANAGEMENT_API = "http://localhost:8080/api";

export const login = async (login) => {
  let result = null;
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/login`, login);
    console.log(result);
    alert("Login success!");
  } catch (e) {
    console.log(e);
    alert("Login fail! ");
  }
  return result;
};

export const register = async (register) => {
  let result = null;
  try {
    result = await axios.post(`${USER_MANAGEMENT_API}/register-user`, register);
    console.log(result);
    alert("Register success!");
  } catch (e) {
    console.log("Register fail! ");
  }
  return result;
};