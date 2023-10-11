import axios from "axios";

const PRODUCT_API = "http://localhost:8080/api/products";

export const findProducts = async (pageNumber) => {
  let result = null;
  try {
    if (pageNumber === 1) {
      result = await axios.get(`${PRODUCT_API}`);
    }
    if (pageNumber > 1) {
      result = await axios.get(`${PRODUCT_API}?page=${pageNumber - 1}`);
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
    let url = `${PRODUCT_API}/sub-category?id=${subCategoryId}`;
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
    let url = `${PRODUCT_API}/search?keyword=${keyword}`;
    if (sortOrder) {
      url += `&sortOrder=${sortOrder}`;
    }
    if (pageNumber > 1) {
      url += `&page=${pageNumber - 1}`;
    }

    result = await axios.get(url);
  } catch (e) {}
  console.log(result);
  return result;
};
export const findProductsSortByPriceDescending = async (pageNumber) => {
  let result = null;
  try {
    if (pageNumber === 1) {
      result = await axios.get(`${PRODUCT_API}/sort/descending`);
    }
    if (pageNumber > 1) {
      result = await axios.get(
        `${PRODUCT_API}/sort/descending?page=${pageNumber - 1}`
      );
    }
  } catch (e) {}

  return result;
};
export const findProductsSortByPriceAscending = async (pageNumber) => {
  let result = null;
  try {
    if (pageNumber === 1) {
      result = await axios.get(`${PRODUCT_API}/sort/ascending`);
    }
    if (pageNumber > 1) {
      result = await axios.get(
        `${PRODUCT_API}/sort/ascending?page=${pageNumber - 1}`
      );
    }
  } catch (e) {}

  return result;
};
