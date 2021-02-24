import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    id: null,
    article: {}
};

export const articleFetchReducer = createReducer(initialState, {
    [types.ARTICLE_FETCH_REQUEST](state, action) {
        return {
            ...state,
            id: action.id,
        };
    },
    [types.ARTICLE_FETCH_RESPONSE](state, action) {
        return {
            ...state,
            article: action.response
        };
    }
});
