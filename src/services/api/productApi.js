import apiClient from "./apiClient";

export const getProducts = async () => {
  const response =
    await apiClient.get("/products");

  return response.data;
};

export const createProduct = async (
  data
) => {
  const response =
    await apiClient.post(
      "/products",
      data
    );

  return response.data;
};