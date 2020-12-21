import { EDIT_WATCHLIST_ITEM, GET_WATCHLIST, POST_NEW_WATCHLIST_ITEM, REMOVE_WATCHLIST_ITEM, SET_WATCHLIST, UPDATE_EDIT_WATCHLIST_ITEM, UPDATE_NEW_WATCHLIST_ITEM, UPDATE_REMOVE_WATCHLIST_ITEM } from "./types/WatchlistTypes";

export const getUsersWatchlist = () => {
    return {
        type: GET_WATCHLIST
    }
}

export const setUsersWatchlist = payload => {
    return {
        type: SET_WATCHLIST,
        payload
    }
}

export const postNewWatchlistItem = payload => {
    return {
        type: POST_NEW_WATCHLIST_ITEM,
        payload
    }
}

export const updateNewWatchlistItem = payload => {
    return {
        type: UPDATE_NEW_WATCHLIST_ITEM,
        payload
    }
}

export const editWatchlistItem = payload => {
    return {
        type: EDIT_WATCHLIST_ITEM,
        payload
    }
}

export const updateEditWatchlistItem = payload => {
    return {
        type: UPDATE_EDIT_WATCHLIST_ITEM,
        payload
    }
}

export const removeWatchlistItem = payload => {
    return {
        type: REMOVE_WATCHLIST_ITEM,
        payload
    }
}

export const updateRemoveWatchlistItem = payload => {
    return {
        type: UPDATE_REMOVE_WATCHLIST_ITEM,
        payload
    }
}