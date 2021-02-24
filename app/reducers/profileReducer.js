import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    user: {},
};

export const profileReducer = createReducer(initialState, {
    [types.STORE_PROFILE_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.STORE_PROFILE_RESPONSE](state, action) {
        return {
            ...state,
        };
    },
});