import { SET_MOVIES, SET_TOTAL_MOVIES } from '../actions/ActionTypes';

const initialState = {
  all: [],
  totalMovies: 0
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, all: action.payload };
    case SET_TOTAL_MOVIES:
      return { ...state, totalMovies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
