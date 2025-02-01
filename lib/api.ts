import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all products
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    if (response.status !== 200) {
      throw new Error("Failed to fetch products");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products. Please try again.");
  }
};

// Fetch a single product by ID
export const getProductById = async (id: number) => {
  try {
    const response = await api.get(`/products/product/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Create a new order
export const createOrder = async (orderData: { userId: number; items: { productId: number; quantity: number }[] }) => {
  try {
    const response = await api.post("/orders", orderData);
    if (response.status !== 201) {
      throw new Error("Failed to create order");
    }
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order. Please try again.");
  }
};

// Fetch all orders
export const getOrders = async () => {
  try {
    const response = await api.get("/orders");
    if (response.status !== 200) {
      throw new Error("Failed to fetch orders");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders. Please try again.");
  }
};

// Register a new user
export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await api.post("/auth/register", userData);
    if (response.status !== 201) {
      throw new Error("Failed to register user");
    }
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("Failed to register user. Please try again.");
  }
};

// Authenticate user login
export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    const response = await api.post("/auth/login", credentials);
    if (response.status !== 200) {
      throw new Error("Failed to login");
    }
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed. Please check your credentials.");
  }
};

export default api;
