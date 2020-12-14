import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, REGISTER, GET_MOVIES, GET_MOVIES_BY_PAGE } from '../actions/ActionTypes';
import { userLogin, userRegister } from './AuthSagas';
import { moviesGet, moviesGetByPage } from './MovieSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(REGISTER, userRegister),
    takeLatest(GET_MOVIES, moviesGet),
    takeLatest(GET_MOVIES_BY_PAGE, moviesGetByPage)
  ]);
}
