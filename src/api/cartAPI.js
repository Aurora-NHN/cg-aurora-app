import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const addCartLineToCart = async (productId, quantity, token) => {
  let result = null;
  try {
    result = await axios.post(
      `${AURORA_API}/cart/add?productId=${productId}&quantity=${quantity}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log("Cart api error");
    console.log(e);
  }
  return result;
};
export const addNewQuantiytToCart = async (productId, quantity, token) => {
  let result = null;
  try {
    result = await axios.post(
      `${AURORA_API}/cart/add-quantity?productId=${productId}&quantity=${quantity}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log("Cart api error");
    console.log(e);
  }
  return result;
};

export const showCart = async (token) => {
  let result = null;
  try {
    result = await axios.get(
      `${AURORA_API}/cart/show-cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  return result;
};


export const deleteCartLine = async (productId, token) => {
  let result = null;
  try {
    result = await axios.delete(
      `${AURORA_API}/cart/delete-cart-line?productId=${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
  return result;
};

export const resetCartAPI = async () => {
  let result = null;
  let token = localStorage.getItem("token");
  try {
    result = await axios.get(`${AURORA_API}/cart/reset`,
     {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
  return result;
};