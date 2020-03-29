const url = "https://ntp-forum-server.herokuapp.com";

export const registerEndpoint = url + "/register";
export const loginEndpoint = url + "/login";
export const authEndpoint = url + "/auth";
export const searchEndpoint = url + "/search?data=";
export const fetchForumsEndpoint = url + "/getForums";
export const createThreadEndpoint = url + "/createThread";
export const findThreadEndpoint = url + "/findThread?id=";
export const createPostEndpoint = url + "/createPost";

//dev

export const deletePostEndpoint = "http://localhost:3000/deletePost";
export const editPostEndpoint = "http://localhost:3000/editPost";
export const fetchProfilEndpoint = "http://localhost:3000/fetchProfil?id=";
