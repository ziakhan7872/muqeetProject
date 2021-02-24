import * as types from './types';

export function registerPushNotificationToken(token) {
    return {
        type: types.REGISTER_PUSH_NOTIFICATION_TOKEN_REQUEST,
        token,
    };
}

export function onRegisterPushNotificationTokenResponse(response) {
    return {
        type: types.REGISTER_PUSH_NOTIFICATION_TOKEN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.REGISTER_PUSH_NOTIFICATION_TOKEN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.REGISTER_PUSH_NOTIFICATION_TOKEN_DISABLE_LOADER
    };
}
