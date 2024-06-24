import { axiosClient } from "../api/axiosConfig";

export const getShopFilteredService = async ({
  filter,
  orderBy = "ASC",
  sortBy = "name",
  limit = 12,
  page = 1,
}) => {
  const param = filter.length !== 0 ? filter : "all";

  try {
    const res = await axiosClient.get(
      `/shop/filter/${param}?orderBy=${orderBy}&sortBy=${sortBy}&limit=${limit}&page=${page}`
    );
    return res.data;
  } catch (error) {
    console.log("Error service:: ", error);
    throw error;
  }
};

export const getShopDetailService = async ({ id }) => {
  try {
    const res = await axiosClient.get(`/shop/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error service:: ", error);
    throw error;
  }
};
