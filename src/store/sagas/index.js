import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER } from '../actions/types/AuthActionTypes';
import { GET_ALL_GENRES } from '../actions/types/GenreActionTypes';
import { FILTER_MOVIES, GET_MOVIES, GET_MOVIES_BY_PAGE, GET_MOVIE_BY_ID, FETCH_MORE_COMMENTS, REACT_ON_MOVIE, SEARCH_MOVIES, POST_COMMENT, GET_POPULAR_MOVIES } from '../actions/types/MovieActionTypes'
import { userLogin, userRegister } from './AuthSagas';
import { movieGetById, moviesGet, moviesGetByPage, moviesSearch, moviesFilter, moviesReaction, commentsLoadMore, commentsPostNew, moviesGetPopular } from './MovieSagas';
import { genresGet } from './GenreSagas';
import { EDIT_WATCHLIST_ITEM, GET_WATCHLIST, POST_NEW_WATCHLIST_ITEM, REMOVE_WATCHLIST_ITEM } from '../actions/types/WatchlistTypes';
import { watchlistEditItem, watchlistGet, watchlistPostNewItem, watchlistRemoveItem } from './WatchlistSagas';

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
    takeLatest(GET_POPULAR_MOVIES, moviesGetPopular),
    takeLatest(GET_WATCHLIST, watchlistGet),
    takeLatest(POST_NEW_WATCHLIST_ITEM, watchlistPostNewItem),
    takeLatest(EDIT_WATCHLIST_ITEM, watchlistEditItem),
    takeLatest(REMOVE_WATCHLIST_ITEM, watchlistRemoveItem)
  ]);
}
