import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER } from '../actions/types/AuthActionTypes';
import { GET_ALL_GENRES } from '../actions/types/GenreActionTypes';
import { FILTER_MOVIES, GET_MOVIES, GET_MOVIES_BY_PAGE, GET_MOVIE_BY_ID, FETCH_MORE_COMMENTS, REACT_ON_MOVIE, SEARCH_MOVIES, POST_COMMENT } from '../actions/types/MovieActionTypes'
import { userLogin, userRegister } from './AuthSagas';
import { movieGetById, moviesGet, moviesGetByPage, moviesSearch, moviesFilter, moviesReaction, commentsLoadMore, commentsPostNew } from './MovieSagas';
import { genresGet } from './GenreSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIES_BY_PAGE, moviesGetByPage),
    takeLatest(GET_MOVIE_BY_ID, movieGetById),
    takeLatest(SEARCH_MOVIES, moviesSearch),
    takeLatest(GET_ALL_GENRES, genresGet),
    takeLatest(FILTER_MOVIES, moviesFilter),
    takeLatest(REACT_ON_MOVIE, moviesReaction),
    takeLatest(FETCH_MORE_COMMENTS, commentsLoadMore),
    takeLatest(POST_COMMENT, commentsPostNew),
  ]);
}
