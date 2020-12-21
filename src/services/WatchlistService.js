import ApiService from './ApiService';

const ENDPOINTS = {
  WATCHLIST: '/api/watchlist',
};

class WatchlistService extends ApiService {


  getUsersWatchlist = () => {
    return this.apiClient.get(ENDPOINTS.WATCHLIST);
  }

  postNewWatchlistItem = (payload) => {
    return this.apiClient.post(ENDPOINTS.WATCHLIST, payload);
  }

  editWatchlistItem = (payload) => {
    const data = {watched: payload.watched};
    const endpoint = `${ENDPOINTS.WATCHLIST}/${payload.itemId}`;
    return this.apiClient.put(endpoint, data);
  }

  removeWatchlistItem = (payload) => {
    const endpoint = `${ENDPOINTS.WATCHLIST}/${payload}`;
    return this.apiClient.delete(endpoint);
  }
}

export const watchlistService = new WatchlistService();
