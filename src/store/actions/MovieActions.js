import { GET_MOVIES, SET_MOVIES, GET_MOVIES_BY_PAGE, SET_TOTAL_MOVIES, GET_MOVIE_BY_ID, SET_MOVIE, SEARCH_MOVIES, FILTER_MOVIES, REACT_ON_MOVIE, UPDATE_MOVIE_REACTIONS, SET_COMMENTS, LOAD_MORE_COMMENTS, FETCH_MORE_COMMENTS, POST_COMMENT, LOAD_NEW_COMMENT, INCREMENT_VIEWS, UPDATE_VIEWS } from './types/MovieActionTypes';

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

export const setComments = payload => {
  return {
    type: SET_COMMENTS,
    payload
  }
}

export const fetchMoreComments = payload => {
  return {
    type: FETCH_MORE_COMMENTS,
    payload
  }
}

export const loadMoreComments = payload => {
  return {
    type: LOAD_MORE_COMMENTS,
    payload
  }
}

export const postComment = payload => {
  return {
    type: POST_COMMENT,
    payload
  }
}

export const loadNewComment = payload => {
  return {
    type: LOAD_NEW_COMMENT,
    payload
  }
}

export const incrementViews = payload => {
  return {
    type: INCREMENT_VIEWS,
    payload
  }
}

export const updateViews = payload => {
  return {
    type: UPDATE_VIEWS,
    payload
  }
}
