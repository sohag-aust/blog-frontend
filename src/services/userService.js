import { myAxios } from "./helper"

export const signUp = (user) => {
    return myAxios
            .post('/auth/register', user)
            .then((res) => res.data);
}

export const login = (loginDetail) => {
    return myAxios
            .post('/auth/login', loginDetail)
            .then((res) => res?.data);
}