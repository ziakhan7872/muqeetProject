import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    autoFidbacks: [],
    nextPageUrl: ''
};

export const autoFidbacksFetchReducer = createReducer(initialState, {
    [types.AUTOFIDBACKS_FETCH_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.AUTOFIDBACKS_FETCH_RESPONSE](state, action) {
        return {
            ...state,
            autoFidbacks: [/*...state.autoFidbacks, */...action.response.data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
            nextPageUrl: action.response.next_page_url
        };
    }
});
