import * as types from './types';

export function fetchSubscriptionPlans() {
    return {
        type: types.FETCH_SUBSCRIPTION_PLANS_REQUEST,
    };
}

export function onFetchSubscriptionPlansResponse(response) {
    return {
        type: types.FETCH_SUBSCRIPTION_PLANS_RESPONSE,
        response
    };
}

export function enableSubscriptionPlansLoader() {
    return {
        type: types.FETCH_SUBSCRIPTION_PLANS_ENABLE_LOADER
    };
}

export function disableSubscriptionPlansLoader() {
    return {
        type: types.FETCH_SUBSCRIPTION_PLANS_DISABLE_LOADER
    };
}

export function openSubscriptionPlan(id) {
    return {
        type: types.OPEN_SUBSCRIPTION_PLAN_REQUEST,
        id,
    };
}

export function onOpenSubscriptionPlanResponse(response) {
    return {
        type: types.OPEN_SUBSCRIPTION_PLAN_RESPONSE,
        response
    };
}

export function enableOpenSubscriptionPlanLoader() {
    return {
        type: types.OPEN_SUBSCRIPTION_PLAN_ENABLE_LOADER
    };
}

export function disableOpenSubscriptionPlanLoader() {
    return {
        type: types.OPEN_SUBSCRIPTION_PLAN_DISABLE_LOADER
    };
}