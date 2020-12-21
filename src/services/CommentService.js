import ApiService from './ApiService';

const ENDPOINTS = {
    MOVIES: '/api/movies',
    COMMENTS: '/api/comments'
  };

class CommentService extends ApiService {

    getCommentsByMovie = (payload) => {
        let endpoint = '';
        if (payload.hasOwnProperty('page') && payload.hasOwnProperty('perPage')) {
            endpoint = `${ENDPOINTS.MOVIES}/${payload.id}/comments?page=${payload.page}&perPage=${payload.perPage}`;
        } else {
            endpoint = `${ENDPOINTS.MOVIES}/${payload.id}/comments`;
        }
        return this.apiClient.get(endpoint);
    }

    addNewComment = (payload) => {
        return this.apiClient.post(ENDPOINTS.COMMENTS, payload);
    }

    getToken = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user).access_token : undefined;
    };

    setAuthorizationHeader = () => {
        const token = this.getToken();
        if (token) {
            this.api.attachHeaders({
                Authorization: `Bearer ${token}`
            });
        }
    };
}

export const commentService = new CommentService();