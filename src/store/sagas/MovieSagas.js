import { call, put } from 'redux-saga/effects';

import { movieService } from '../../services/MovieService';
import { setMovie, setMovies, setTotalMovies } from '../actions/MovieActions';

export function* moviesGet() {
  try {
    const { data } = yield call(movieService.getMovies);

    yield put(setMovies(data));
  } catch (error) {
    console.log({ error }); /*eslint-disable-line*/
  }
}

export function* moviesGetByPage({ payload }) {
  try {
    const { data } = yield call(movieService.getMoviesByPage, payload);
    yield put(setMovies(data.movies));
    yield put(setTotalMovies(data.totalMovies));
  } catch (error) {
    console.log({ error });
  }
}

export function* movieGetById({ payload }) {
  try {
    const { data } = yield call(movieService.getMovieById, payload);
    yield put(setMovie(data));
  } catch (error) {
    console.log(error);
  }
}
