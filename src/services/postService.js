import {myAxios, myAxiosWithToken} from "./helper";

export const createPost = (postData) => {
    return myAxiosWithToken.post(`/user/${postData?.userId}/category/${postData?.categoryId}/posts`, postData)?.then(res => res?.data);
}

export const getAllPosts = (pageNo, pageSize) => {
    return myAxios.get(`/posts?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=addedDate&sortOrder=desc`)?.then(res => res?.data);
}

export const loadPostById = (postId) => {
    return myAxios.get(`/post/${postId}`)?.then(res => res?.data);
}