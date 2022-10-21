import {myAxiosWithToken} from "./helper";

export const createPost = (postData) => {
    return myAxiosWithToken.post(`/user/${postData?.userId}/category/${postData?.categoryId}/posts`, postData)?.then(res => res?.data);
}