import axios from "axios";

const CATEGORY_API = "http://localhost:8080/api/categories";

export const findCategories = async () => {
  try {
    const response = await axios.get(`${CATEGORY_API}`);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Không tìm thấy dữ liệu danh mục");
    }
  } catch (error) {
    throw new Error("Có lỗi xảy ra khi tải danh mục");
  }
};
