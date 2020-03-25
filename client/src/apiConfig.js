const url = "https://ntp-forum-server.herokuapp.com";

export const registerEndpoint = url + "/register";
export const loginEndpoint = url + "/login";
export const authEndpoint = url + "/auth";
export const searchEndpoint = url + "/search?data=";

//DEV
export const fetchForumsEndpoint = "http://localhost:3000/getForums";
export const createThreadEndpoint = "http://localhost:3000/createThread";
export const findThreadEndpoint = "http://localhost:3000/findThread?id=";
