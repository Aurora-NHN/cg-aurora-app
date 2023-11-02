import axios from "axios";
const API_PROVINCE = "https://vapi.vnappmob.com/api/province/";
const API_DISTRICT = "https://vapi.vnappmob.com/api/province/district/";
const API_WARD = "https://vapi.vnappmob.com/api/province/ward/";

export const provincesAPI = async () => {
  let result = null;
  try {
    result = await axios.get(`${API_PROVINCE}`);
  } catch (e) {
    console.log(e);
  }
  return result;
};
export const districtsAPI = async (provinceId) => {
  let result = null;
  try {
    result = await axios.get(`${API_DISTRICT}${provinceId}`);
  } catch (e) {
    console.log(e);
  }
  return result;
};
export const wardsAPI = async (districtId) => {
  let result = null;
  try {
    result = await axios.get(`${API_WARD}${districtId}`);
  } catch (e) {
    console.log(e);
  }
  return result;
};