import axios from "axios";

export const BASE_PORT = 8095;
export const BASE_URL = `http://localhost:${BASE_PORT}`;

export const myAxios = axios.create({
    baseURL: BASE_URL
}); // axios provider