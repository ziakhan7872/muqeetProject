import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    id: null,
    autoFidback: null
};

export const autoFidbackFetchReducer = createReducer(initialState, {
    [types.AUTOFIDBACK_FETCH_REQUEST](state, action) {
        return {
            ...state,
            id: action.id,
        };
    },
    [types.AUTOFIDBACK_FETCH_RESPONSE](state, action) {
        return {
            ...state,
            autoFidback: action.response
        };
    }
});
