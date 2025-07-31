import axios from "axios";

const API_URL = "http://localhost:3000";

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  return response.data; 
}

export async function register(name: string, email: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name,
    email,
    password,
  });
  return response.data;
}
