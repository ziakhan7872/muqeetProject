import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    lockdownMentalHealthTips: [],
    lockdownMentalHealthTipsNextPageUrl: ''
};

export const lockdownMentalHealthTipsFetchReducer = createReducer(initialState, {
    [types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_RESPONSE](state, action) {
        return {
            ...state,
            lockdownMentalHealthTips: [/*...state.relaxationExercises, */...action.response.data],
            lockdownMentalHealthTipsNextPageUrl: action.response.next_page_url
        };
    },
});
