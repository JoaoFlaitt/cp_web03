import axios from 'axios';

const API_KEY = 'a49b0443dc05de67b13455601aa3a1f1';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async () => {
  const response = await api.get('/movie/popular');
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await api.get('/movie/upcoming');
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};
