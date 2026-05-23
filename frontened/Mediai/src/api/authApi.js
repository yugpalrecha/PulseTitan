import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth";

export const registerUser = async (data) => {
    return await axios.post(`${BASE_URL}/register`, data);
};

export const loginUser = async (data) => {
    return await axios.post(`${BASE_URL}/login`, data);
};