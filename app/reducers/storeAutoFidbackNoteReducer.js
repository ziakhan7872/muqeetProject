import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    id: null,
};

export const storeAutoFidbackNoteReducer = createReducer(initialState, {
    [types.AUTOFIDBACK_NOTE_STORE_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.AUTOFIDBACK_NOTE_STORE_RESPONSE](state) {
        return {
            ...state,
        };
    },
});
