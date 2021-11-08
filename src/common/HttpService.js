import axios from "axios";

export const fetchNews = async (query) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`);
}
