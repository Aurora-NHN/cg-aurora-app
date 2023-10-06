import axios from "axios";

const PRODUCT_API = "http://localhost:8080/api/products";

export const findProducts = async (keyword) => {
  let result = null;
  try {
    if (keyword == null) {
      result = await axios.get(`${PRODUCT_API}`);
      console.log(result)
    } else {
      result = await axios.get(`${PRODUCT_API}/search?keyword=${keyword}`);
    }
  } catch (e) {}
  return result;
};


