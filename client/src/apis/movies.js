import axios from 'axios';
import MovieList from '../components/movies/MovieList';
import movieReducer from '../reducers/movieReducer';
export const API_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
export const API_KEY = '6f76d547fab518423df7a041212b23b1';
// export default axios.create({
//   baseURL: 'http://localhost:3001',
// });
export const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=KR`;
export default axios.create({
  baseURL: URL
})
