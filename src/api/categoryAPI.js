import axios from "axios";
import {AURORA_API} from "~/app/constants";

export const findCategories = async () => {
  try {
    const response = await axios.get(`${AURORA_API}/categories`);
    if (response.data) {
      return response.data;
    } else {
      throw new Error("Không tìm thấy dữ liệu danh mục");
    }
  } catch (error) {
    throw new Error("Có lỗi xảy ra khi tải danh mục");
  }
};
