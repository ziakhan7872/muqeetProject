import * as types from './types';

export function resetPassword(email) {
    return {
        type: types.RESET_PASSWORD_REQUEST,
        email
    };
}

export function onResetPasswordResponse(response) {
    return {
        type: types.RESET_PASSWORD_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.RESET_PASSWORD_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.RESET_PASSWORD_DISABLE_LOADER
    };
}
