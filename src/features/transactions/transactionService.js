import axiosInstance from "../../services/api";

export const getTransactions = async () => {
  try {
    const response = await axiosInstance.get("/transactions");
    return response.data;
  } catch (error) {
    console.error("Error fetching transaction:", error);
    throw error;
  }
};
