import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    articles: [],
    nextPageUrl: ''
};

export const articlesFetchReducer = createReducer(initialState, {
    [types.ARTICLES_FETCH_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.ARTICLES_FETCH_RESPONSE](state, action) {
        return {
            ...state,
            articles: [/*...state.articles, */...action.response.data].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)),
            nextPageUrl: action.response.next_page_url
        };
    }
});
