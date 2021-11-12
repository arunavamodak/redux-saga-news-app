import axios from "axios";

export const fetchNews = async (query) => {
    return await axios.get(
        `${process.env.REACT_APP_API_URL}everything?q=${query.search}&page=${query.page}&apiKey=${process.env.REACT_APP_API_KEY}`);
}