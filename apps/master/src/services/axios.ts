import axios, { AxiosInstance } from "axios";
import { APIs } from "./APIs";

// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: APIs.BASE_URL,
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify or attach headers (e.g., add an authorization token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);


// Generic GET request function
export const getAxios = async <Response>(
  url: string,
  params?: Record<string, any>
): Promise<Response> => {
  try {
    const response = await axiosInstance.get<Response>(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Generic POST request function
export const postAxios = async <Response, Request = any>(
  url: string,
  data: Request
): Promise<Response> => {
  try {
    const response = await axiosInstance.post<Response>(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
