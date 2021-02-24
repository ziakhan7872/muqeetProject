import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const fidbackRequestReducerInitialState = {
    request: null,
};

export const fidbackRequestReducer = createReducer(fidbackRequestReducerInitialState, {
    [types.SEND_FIDBACK_REQUEST_REQUEST](state, action) {
        return {
            ...state,
            request: action.request,
        };
    },
    [types.SEND_FIDBACK_REQUEST_RESPONSE](state, action) {
        return {
            ...state,
            fidbackRequestResponse: action.response
        };
    },
});

const personalFidbackProfileInitialState = {
    request: null,
};

export const personalFidbackProfileReducer = createReducer(personalFidbackProfileInitialState, {
    [types.PERSONAL_FIDBACK_PROFILE_STORE_REQUEST](state, action) {
        return {
            ...state,
            request: action.request,
        };
    },
    [types.PERSONAL_FIDBACK_PROFILE_STORE_RESPONSE](state, action) {
        return {
            ...state,
        };
    },
});

const checkUserSubscirptionInitialState = {
    userHasActiveSubscription: null,
};

export const userSubscriptionReducer = createReducer(checkUserSubscirptionInitialState, {
    [types.CHECK_USER_SUBSCRIPTION_REQUEST](state, action) {
        return {
            ...state,
            request: action.request,
        };
    },
    [types.CHECK_USER_SUBSCRIPTION_RESPONSE](state, action) {
        return {
            ...state,
            userHasActiveSubscription: action.response
        };
    },
});