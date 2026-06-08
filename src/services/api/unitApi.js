import apiClient from "./apiClient";

export const getUnits = async () => {
  const response =
    await apiClient.get("/units");

  return response.data;
};

export const createUnit = async (
  data
) => {
  const response =
    await apiClient.post(
      "/units",
      data
    );

  return response.data;
};