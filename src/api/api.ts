import axios from "axios";

export default axios.create({
    baseURL: "https://http://www.localhost.com:3001",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});