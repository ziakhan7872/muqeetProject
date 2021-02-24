import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    personalFidbackMessages: []
};

export const personalFidbackMessagesReducer = createReducer(initialState, {
    [types.FETCH_PERSONAL_FIDBACK_MESSAGES_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.FETCH_PERSONAL_FIDBACK_MESSAGES_RESPONSE](state, action) {
        return {
            ...state,
            personalFidbackMessages: action.response
        };
    },
    [types.SEND_PERSONAL_FIDBACK_MESSAGE_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.SEND_PERSONAL_FIDBACK_MESSAGE_RESPONSE](state, action) {
        return {
            ...state,
        };
    }
});
