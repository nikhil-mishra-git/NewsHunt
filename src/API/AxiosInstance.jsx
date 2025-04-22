import axios from 'axios';

const API = axios.create({
    baseURL: 'https://saurav.tech/NewsAPI/'
});

// Creating Route to fetch news by category
export const getNewsByCategory = (category, countryCode = 'in') => {
    return API.get(`/top-headlines/category/${category}/in.json`);
};

// Creating Route to fetch news by category
export const getAllNews = () => {
    return API.get(`everything/cnn.json`);
};