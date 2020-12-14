import { GET_MOVIES, SET_MOVIES, GET_MOVIES_BY_PAGE, SET_TOTAL_MOVIES } from './ActionTypes';

export const getMovies = () => {
  return {
    type: GET_MOVIES
  };
};

export const setMovies = payload => {
  return {
    type: SET_MOVIES,
    payload
  };
};

export const getMoviesByPage = payload => {
  return {
    type: GET_MOVIES_BY_PAGE,
    payload
  };
};

export const setTotalMovies = payload => {
  return {
    type: SET_TOTAL_MOVIES,
    payload
  }
}
