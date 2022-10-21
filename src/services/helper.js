import axios from "axios";
import {getToken} from "../auth";

export const BASE_PORT = 8095;
export const BASE_URL = `http://localhost:${BASE_PORT}/api/v1`;

export const myAxios = axios.create({
    baseURL: BASE_URL
}); // axios provider

export const myAxiosWithToken = axios.create({
    baseURL: BASE_URL
});

myAxiosWithToken.interceptors.request.use(config => {
    const jwtToken = getToken();
    if(jwtToken) {
        config.headers.common.Authorization=`Bearer ${jwtToken}`;
        return config;
    }
}, error => Promise.reject(error));