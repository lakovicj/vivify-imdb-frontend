import { call, put } from 'redux-saga/effects';
import { movieService } from '../../services/MovieService';
import { commentService } from '../../services/CommentService';
import { setMovie, setMovies, setTotalMovies, updateMovieReactions, setComments, loadMoreComments, loadNewComment } from '../actions/MovieActions';

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
    const { data } = yield call(movieService.getMovieById, payload.id);
    const commentsResponse = yield call(commentService.getCommentsByMovie, payload);
    yield put(setMovie(data));
    yield put(setComments(commentsResponse.data));
  } catch (error) {
    console.log(error);
  }
}

export function* moviesSearch({ payload }) {
  try {
    const { data } = yield call(movieService.searchMovies, payload);
    yield put(setMovies(data.movies));
    yield put(setTotalMovies(data.totalMovies));
  } catch (error) {
    console.log(error)
  }
}

export function* moviesFilter({ payload }) {
  try {
    const { data } = yield call(movieService.filterMovies, payload);
    yield put(setMovies(data.movies));
    yield put(setTotalMovies(data.totalMovies));
  } catch (error) {
    console.log(error)
  }
}

export function* moviesReaction({ payload }) {
  try {
    const { data } = yield call(movieService.reactOnMovie, payload);
    yield put(updateMovieReactions(data));
  } catch (error) {
    console.log(error)
  }
}

export function* commentsLoadMore({ payload }) {
  try {
    const { data } = yield call(commentService.getCommentsByMovie, payload);
    yield put(loadMoreComments(data));
  } catch (error) {
    console.log(error)
  }
}

export function* commentsPostNew({ payload }) {
  try {
    const { data } = yield call(commentService.addNewComment, payload);
    yield put(loadNewComment(data));
  } catch (error) {
    console.log(error)
  }
}

