import axios from "axios";

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6&language=ru&pageSize=8

axios.defaults.baseURL = "https://newsapi.org/v2/everything";

export const getNewsApi = ({ q = "bitcoin", country = "en" }) => {
  axios.defaults.params = {
    q,
    language: country,
    page: 1,
    apiKey: API_KEY,
    pageSize: 10,
  };
  return axios.get().then(({ data }) => ({
    news: data.articles,
    totalNews: data.totalResults,
  }));
};
