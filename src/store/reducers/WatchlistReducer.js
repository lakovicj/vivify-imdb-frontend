import { SET_WATCHLIST, UPDATE_EDIT_WATCHLIST_ITEM, UPDATE_NEW_WATCHLIST_ITEM, UPDATE_REMOVE_WATCHLIST_ITEM } from '../actions/types/WatchlistTypes';

const initialState = {
    items: []
};

const watchlistReducer = (state = initialState, action) => {
    let index;
    switch(action.type) {

        case SET_WATCHLIST:
            return {
                ...state,
                items: [
                    ...action.payload
                ]
            }

        case UPDATE_NEW_WATCHLIST_ITEM:
            return {
                ...state,
                items: [
                    ...state.items, 
                    action.payload
                ]
            }

        case UPDATE_EDIT_WATCHLIST_ITEM:
            index = state.items.findIndex(it => it.id === action.payload.id);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, index),
                    action.payload,
                    ...state.items.slice(index + 1)
                ]
            }
 
        case UPDATE_REMOVE_WATCHLIST_ITEM:
            index = state.items.findIndex(it => it.id === action.payload);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, index),
                    ...state.items.slice(index + 1)
                ]
            }

        default:
            return state;
    }
}

export default watchlistReducer;