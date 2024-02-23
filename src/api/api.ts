import axios from "axios";

export default axios.create({
    baseURL: "https://backend-dindin-q1mk.onrender.com",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

// A conexão com API será reutilizada