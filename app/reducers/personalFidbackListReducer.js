import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    personalFidbackList: [],
    remainingRequests: null
};

export const personalFidbackListReducer = createReducer(initialState, {
    [types.FETCH_PERSONAL_FIDBACK_LIST_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.FETCH_PERSONAL_FIDBACK_LIST_RESPONSE](state, action) {
        return {
            ...state,
            personalFidbackList: action.response.list,
            remainingRequests: action.response.remaining_requests,
        };
    }
});
