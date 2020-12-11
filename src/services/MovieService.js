import ApiService from './ApiService';

const ENDPOINTS = {
  MOVIES: '/api/movies'
};

class MovieService extends ApiService {
  
  constructor() {
    super();
    this.setAuthorizationHeader();
  }

  getMovies = () => {
    return this.apiClient.get(ENDPOINTS.MOVIES);
  };

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
