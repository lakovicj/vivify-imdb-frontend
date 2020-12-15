import { SET_MOVIE, SET_MOVIES, SET_TOTAL_MOVIES, UPDATE_MOVIE_REACTIONS } from '../actions/types/MovieActionTypes';

const initialState = {
  all: [],
  totalMovies: 0,
  selectedMovie: null
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_TOTAL_MOVIES:
      return { ...state, totalMovies: action.payload };
    case SET_MOVIE:
      return { ...state, selectedMovie: {...action.payload} };
    case UPDATE_MOVIE_REACTIONS:
      const movieInd = state.all.findIndex((movie) => movie.id === action.payload.movie_id);
      const movie = state.all[movieInd];
      const updatedMovie = {
        ...movie,
        reactions: [
          ...movie.reactions,
          action.payload
        ]
      }
      const updatedMovies = [
        ...state.all.slice(0, movieInd),
        updatedMovie,
        ...state.all.slice(movieInd + 1)
      ];
      return {
        ...state,
        all: updatedMovies,
        selectedMovie: updatedMovie
      }
    default:
      return state;
  }
};

export default movieReducer;
