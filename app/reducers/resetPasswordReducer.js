import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
};

export const resetPasswordReducer = createReducer(initialState, {
    [types.RESET_PASSWORD_REQUEST](state, action) {
        return {
            ...state,
            email: action.email
        };
    },
    [types.RESET_PASSWORD_RESPONSE](state, action) {
        return {
            ...state,
        };
    },
});
