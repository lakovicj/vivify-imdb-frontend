import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies',
  SEARCH_MOVIES: '/api/search/movies',
  FILTER_MOVIES: '/api/filter/movies'
};

class MovieService extends ApiService {

  constructor() {
    super();
    this.setAuthorizationHeader();
  }

  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

  getMoviesByPage = ({ page, perPage }) => {
    const endpoint = ENDPOINTS.MOVIES + "?perPage=" + perPage + "&page=" + page;
    return this.apiClient.get(endpoint);
  }

  getMovieById = (payload) => {
    const endpoint = ENDPOINTS.MOVIES + "/" + payload;
    return this.apiClient.get(endpoint);
  }

  searchMovies = ({ page, perPage, title }) => {
    const endpoint = `${ENDPOINTS.SEARCH_MOVIES}?perPage=${perPage}&page=${page}&title=${title}`;
    return this.apiClient.get(endpoint);
  }

  filterMovies = ({ page, perPage, filter }) => {
    const endpoint = `${ENDPOINTS.FILTER_MOVIES}?perPage=${perPage}&page=${page}&filter=${filter}`;
    return this.apiClient.get(endpoint);
  }

  getToken = () => {
    console.log("getToken()");
    const user = localStorage.getItem('user');
    console.log("User:", user);
    return user ? JSON.parse(user).access_token : undefined;
  };

  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`
      });
    }
  };

}

export const movieService = new MovieService();
