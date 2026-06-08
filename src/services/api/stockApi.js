import apiClient from "./apiClient";

export const getCurrentStock =
  async () => {
    const response =
      await apiClient.get(
        "/current-stock"
      );

    return response.data;
  };