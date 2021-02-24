import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    relaxationExercises: [],
    relaxationExercisesNextPageUrl: ''
};

export const relaxationExercisesFetchReducer = createReducer(initialState, {
    [types.RELAXATION_EXERCISES_FETCH_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.RELAXATION_EXERCISES_FETCH_RESPONSE](state, action) {
        return {
            ...state,
            relaxationExercises: [/*...state.relaxationExercises, */...action.response.data],
            relaxationExercisesNextPageUrl: action.response.next_page_url
        };
    },
});
