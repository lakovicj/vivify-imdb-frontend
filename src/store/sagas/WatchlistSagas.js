import { call, put } from 'redux-saga/effects';
import { watchlistService } from '../../services/WatchlistService';
import { setUsersWatchlist, updateEditWatchlistItem, updateNewWatchlistItem, updateRemoveWatchlistItem } from '../actions/WatchlistActions';

export function* watchlistGet() {
    try {
        const { data } = yield call(watchlistService.getUsersWatchlist);
        yield put(setUsersWatchlist(data));
    } catch (error) {
        console.err(error);
    }
}

export function* watchlistPostNewItem({ payload }) {
    try {
        const { data } = yield call(watchlistService.postNewWatchlistItem, payload);
        yield put(updateNewWatchlistItem(data));
    } catch (error) {
        console.err(error);
    }
}

export function* watchlistEditItem({ payload }) {
    try {
        const { data } = yield call(watchlistService.editWatchlistItem, payload);
        yield put(updateEditWatchlistItem(data));
    } catch (error) {
        console.err(error);
    }
}

export function* watchlistRemoveItem({ payload }) {
    try {
        yield call(watchlistService.removeWatchlistItem, payload);
        yield put(updateRemoveWatchlistItem(payload));
    } catch (error) {
        console.err(error);
    }
}