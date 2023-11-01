import axios from "axios";
import {CART_API} from "~/app/constants";

export const addCartLineToCart = async (productId, quantity, token) => {
  let result = null;
  try {
    result = await axios.post(
      `${CART_API}/add?productId=${productId}&quantity=${quantity}`,
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
      `${CART_API}/add-quantity-to-cart?productId=${productId}&quantity=${quantity}`,
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
      `${CART_API}/show-cart`,
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
      `${CART_API}/delete-cart-line?productId=${productId}`,
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

export const saveAndGetCartOrder = async (token) => {
  let result = null;
  try {
    result = await axios.get(`${CART_API}/save-cart`,
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