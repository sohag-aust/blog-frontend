import { myAxios } from "./helper"

export const signUp = (user) => {
    return myAxios
            .post('/api/v1/auth/register', user)
            .then((res) => res.data);
}

export const login = (loginDetail) => {
    return myAxios
            .post('/api/v1/auth/login', loginDetail)
            .then((res) => res?.data);
}