import axios from "axios";
const CART_API = "http://localhost:8080/api/cart";

export const addCartLineToCart = async (productId, quantity,token) => {
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

export const deleteCartLine = async (cartLineId,token) => {
  let result = null;
  try {
    result = await axios.delete(
      `${CART_API}/delete-cart-line?cartLineId=${cartLineId}`,
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