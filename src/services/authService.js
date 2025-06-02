import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/login`, {
    email,
    password,
  });

  const token =
    response.data.token ||
    response.data.jwt ||
    response.data.accessToken ||
    null;

  if (!token) {
    throw new Error("Token not found in response");
  }

  return token;
};

export const register = async (name, surname, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      firstName: name,
      lastName: surname,
      email,
      password,
      role: "USER", // sadece sabit gönderiyoruz
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Register failed");
  }
};
