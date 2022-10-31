import {myAxiosWithToken} from "./helper";

export const createComment = (comment, postId) => {
    return myAxiosWithToken.post(`/post/${postId}/comments`, comment)?.then(res => res?.data);
}