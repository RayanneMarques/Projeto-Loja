import axios from "axios";

const api = axios.create({
    baseURL: "http://132.255.99.184:3000",
});

export default api;
