import { LOAD_MORE_COMMENTS, LOAD_NEW_COMMENT, SET_COMMENTS, SET_MOVIE, SET_MOVIES, SET_TOTAL_MOVIES, UPDATE_MOVIE_REACTIONS } from '../actions/types/MovieActionTypes';

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
    case SET_COMMENTS:
      return {
        ...state,
        selectedMovie: {
          ...state.selectedMovie,
          comments: action.payload.comments,
          totalComments: action.payload.totalComments,
          currentPage: action.payload.currentPage,
          perPage: action.payload.perPage
        }
      }
    case LOAD_MORE_COMMENTS:
      const newComments = action.payload.comments.filter((comment) => {
        let flag = true;
        state.selectedMovie.comments.forEach(c => {
          if (c.id === comment.id) {
            flag = false;
          }
        });
        return flag;
      });

      return {
        ...state,
        selectedMovie: {
          ...state.selectedMovie,
          comments: [
            ...state.selectedMovie.comments,
            ...newComments
          ],
          totalComments: action.payload.totalComments,
          currentPage: action.payload.currentPage,
          perPage: action.payload.perPage
        }
      }
      case LOAD_NEW_COMMENT:
        return {
          ...state,
          selectedMovie: {
            ...state.selectedMovie,
            comments: [
              action.payload,
              ...state.selectedMovie.comments
            ]
          }
        }
    default:
      return state;
  }
};

export default movieReducer;
