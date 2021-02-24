import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const subscriptionPlansInitialState = {
    subscriptionPlans: [],
};

export const fetchSubscriptionPlansReducer = createReducer(subscriptionPlansInitialState, {
    [types.FETCH_SUBSCRIPTION_PLANS_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.FETCH_SUBSCRIPTION_PLANS_RESPONSE](state, action) {
        return {
            ...state,
            subscriptionPlans: action.response
        };
    },
    [types.LOGOUT_REQUEST](state, action) {
        return {
            ...state,
            subscriptionPlansInitialState
        };
    },
});

const openSubscriptionPlanReducerInitialState = {
    url: null,
};

export const openSubscriptionPlanReducer = createReducer(openSubscriptionPlanReducerInitialState, {
    [types.OPEN_SUBSCRIPTION_PLAN_REQUEST](state) {
        return {
            ...state,
        };
    },
    [types.OPEN_SUBSCRIPTION_PLAN_RESPONSE](state, action) {
        return {
            ...state,
            url: action.response
        };
    },
});
