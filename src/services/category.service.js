import { axiosClient } from "../api/axiosConfig";

export const getListCategoryService = async () => {};

export const getListCategoryOfShopService = async (shopId) => {
  if (!shopId) {
    throw new Error("shop id must not empty");
  }

  try {
    const res = await axiosClient.get(`/category/shop/${shopId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
