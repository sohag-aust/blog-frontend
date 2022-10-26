import {myAxios, myAxiosWithToken} from "./helper";

export const createPost = (postData) => {
    return myAxiosWithToken.post(`/user/${postData?.userId}/category/${postData?.categoryId}/posts`, postData)?.then(res => res?.data);
}

export const getAllPosts = () => {
    return myAxios.get(`/posts`)?.then(res => res?.data);
}