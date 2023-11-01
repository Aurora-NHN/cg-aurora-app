import axios from "axios";
import {CATEGORY_API} from "~/app/constants";


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
