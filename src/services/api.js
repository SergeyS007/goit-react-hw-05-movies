import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/';
const api_key = 'eef58e7402eb4560bd5a271abcaa31e6';

export async function fetchMovies() {
  const response = await axios.get(`popular?api_key=${api_key}`);
  return response.data.results;
}

export async function fetchMovieById(id) {
  console.log('in fetch', id);
  const response = await axios.get(`${id}?api_key=${api_key}`);
  return response.data;
}

export async function fetchCastById(id) {
  console.log('in fetch', id);
  const response = await axios.get(`${id}/credits?api_key=${api_key}`);
  return response.data;
}

export async function fetchReviewsById(id) {
  console.log('in fetch', id);
  const response = await axios.get(`${id}/reviews?api_key=${api_key}`);
  return response.data;
}

export async function fetchMovieByName(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
  );
  return response.data;
}
