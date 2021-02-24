import * as types from './types';

export function checkUserSubscription() {
    return {
        type: types.CHECK_USER_SUBSCRIPTION_REQUEST,
    };
}

export function onCheckUserSubscriptionResponse(response) {
    return {
        type: types.CHECK_USER_SUBSCRIPTION_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.CHECK_USER_SUBSCRIPTION_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.CHECK_USER_SUBSCRIPTION_DISABLE_LOADER
    };
}
