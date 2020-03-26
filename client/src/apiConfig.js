const url = "https://ntp-forum-server.herokuapp.com";

export const registerEndpoint = url + "/register";
export const loginEndpoint = url + "/login";
export const authEndpoint = url + "/auth";
export const searchEndpoint = url + "/search?data=";
export const fetchForumsEndpoint = url + "/getForums";
export const createThreadEndpoint = url + "/createThread";

//DEV
export const findThreadEndpoint = "http://localhost:3000/findThread?id=";
export const createPostEndpoint = "http://localhost:3000/createPost";
