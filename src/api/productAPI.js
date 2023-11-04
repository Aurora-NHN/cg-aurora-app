import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const findProducts = async (pageNumber) => {
  let result = null;
  try {
    if (pageNumber === 1) {
      result = await axios.get(`${AURORA_API}/products`);
    }
    if (pageNumber > 1) {
      result = await axios.get(`${AURORA_API}/products?page=${pageNumber - 1}`);
    }
  } catch (e) {}
  return result;
};

export const findProductsBySubCategoryId = async (
  subCategoryId,
  pageNumber,
  sortOrder
) => {
  let result = null;
  try {
    let url = `${AURORA_API}/products/sub-category?id=${subCategoryId}`;
    if (sortOrder) {
      url += `&sortOrder=${sortOrder}`;
    }
    if (pageNumber > 1) {
      url += `&page=${pageNumber - 1}`;
    }

    result = await axios.get(url);
  } catch (e) {
    console.error("Error:", e);
  }
  return result;
};

export const findProductsByKeyWord = async (keyword, pageNumber, sortOrder) => {
  let result = null;
  try {
    let url = `${AURORA_API}/products/search?keyword=${keyword}`;
    if (sortOrder) {
      url += `&sortOrder=${sortOrder}`;
    }
    if (pageNumber > 1) {
      url += `&page=${pageNumber - 1}`;
    }

    result = await axios.get(url);
  } catch (e) {}
  return result;
};
export const findProductsSortByPriceDescending = async (pageNumber) => {
  let result = null;
  try {
    if (pageNumber === 1) {
      result = await axios.get(`${AURORA_API}/products/sort/descending`);
    }
    if (pageNumber > 1) {
      result = await axios.get(
        `${AURORA_API}/products/sort/descending?page=${pageNumber - 1}`
      );
    }
  } catch (e) {}

  return result;
};

export const findProductsSortByPriceAscending = async (pageNumber) => {
  let result = null;
  try {
    if (pageNumber === 1) {
      result = await axios.get(`${AURORA_API}/products/sort/ascending`);
    }
    if (pageNumber > 1) {
      result = await axios.get(
        `${AURORA_API}/products/sort/ascending?page=${pageNumber - 1}`
      );
    }
  } catch (e) {}

  return result;
};
export const getOtherProductsAPI = async () => {
  let result = null;
  try {
    result = await axios.get(`${AURORA_API}/products/other-product`);
  } catch (e) {}
  return result;
};
