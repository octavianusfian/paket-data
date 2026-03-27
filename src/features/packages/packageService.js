import axiosInstance from "../../services/api";

export const getPackages = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/packages", {
      params: {
        ...params,
      },
    });
    return response.data.data ?? response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
};

export const getSinglePackage = async (id) => {
  try {
    const response = await axiosInstance.get(`/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching packages:", error);
    throw error;
  }
};
