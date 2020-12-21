import { GET_ALL_GENRES, SET_GENRES } from './types/GenreActionTypes';

export const getAllGenres = () => {
    return {
        type: GET_ALL_GENRES
    }
}

export const setGenres = (payload) => {
    return {
        type: SET_GENRES,
        payload
    }
}
