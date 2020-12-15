import { GET_MOVIES, SET_MOVIES, GET_MOVIES_BY_PAGE, SET_TOTAL_MOVIES, GET_MOVIE_BY_ID, SET_MOVIE, SEARCH_MOVIES, FILTER_MOVIES, REACT_ON_MOVIE, UPDATE_MOVIE_REACTIONS } from './types/MovieActionTypes';

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

export const getMovieById = payload => {
  return {
    type: GET_MOVIE_BY_ID,
    payload
  }
}

export const setMovie = payload => {
  return {
    type: SET_MOVIE,
    payload
  }
}

export const searchMovies = payload => {
  return {
    type: SEARCH_MOVIES,
    payload
  }
}

export const filterMovies = payload => {
  return {
    type: FILTER_MOVIES,
    payload
  }
}

export const reactOnMovie = payload => {
  return {
    type: REACT_ON_MOVIE,
    payload
  }
}

export const updateMovieReactions = payload => {
  return {
    type: UPDATE_MOVIE_REACTIONS,
    payload
  }
}
