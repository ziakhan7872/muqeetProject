import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const storeFidInitialState = {
    fid: {}
};

export const storeFidReducer = createReducer(storeFidInitialState, {
    [types.STORE_FID_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.STORE_FID_RESPONSE](state, action) {
        return {
            ...state,
            fid: action.response
        };
    },
    [types.LOGOUT_REQUEST](state, action) {
        return {
            ...state,
            storeFidInitialState
        };
    },
});

const fetchFidsInitialState = {
    fids: {}
};

export const fetchFidsReducer = createReducer(fetchFidsInitialState, {
    [types.FETCH_FIDS_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.FETCH_FIDS_RESPONSE](state, action) {
        return {
            ...state,
            fids: Object.assign({}, state.fids, action.response)
        };
    },
});

const fetchFidsOfDayInitialState = {
    fidsOfDay: {}
};

export const fetchFidsOfDayReducer = createReducer(fetchFidsOfDayInitialState, {
    [types.FETCH_FIDS_OF_DAY_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.FETCH_FIDS_OF_DAY_RESPONSE](state, action) {
        return {
            ...state,
            fidsOfDay: action.response
        };
    },
});

const fetchBodyReactionsInitialState = {
    emotionId: null,
    bodyReactions: []
};

export const fetchBodyReactionsReducer = createReducer(fetchBodyReactionsInitialState, {
    [types.FETCH_BODY_REACTIONS_REQUEST](state, action) {
        return {
            ...state,
            emotionId: action.emotionId
        };
    },
    [types.FETCH_BODY_REACTIONS_RESPONSE](state, action) {
        return {
            ...state,
            bodyReactions: action.response
        };
    },
});

const fetchSubjectsInitialState = {
    emotionId: null,
    parentSubjects: [],
    childrenSubjects: {}
};

export const fetchSubjectsReducer = createReducer(fetchSubjectsInitialState, {
    [types.FETCH_SUBJECTS_REQUEST](state, action) {
        return {
            ...state,
            emotionId: action.emotionId
        };
    },
    [types.FETCH_SUBJECTS_RESPONSE](state, action) {
        return {
            ...state,
            parentSubjects: action.response.parent_subjects,
            childrenSubjects: action.response.children_subjects
        };
    },
});

const fetchSecondaryEmotionsInitialState = {
    emotionId: null,
    secondaryEmotions: {}
};

export const fetchSecondaryEmotionsReducer = createReducer(fetchSecondaryEmotionsInitialState, {
    [types.FETCH_SECONDARY_EMOTIONS_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.FETCH_SECONDARY_EMOTIONS_RESPONSE](state, action) {
        return {
            ...state,
            secondaryEmotions: action.response
        };
    },
});