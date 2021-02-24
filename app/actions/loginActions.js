import * as types from './types';

export function requestLogin(email, password, notificationToken) {
    return {
        type: types.LOGIN_REQUEST,
        email,
        password,
        notificationToken
    };
}

export function updateUser(profile) {
    return {
        type: types.USER_UPDATE,
        profile
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}

export function logout() {
    return {
        type: types.LOGOUT_REQUEST
    };
}

export function onLogoutResponse(response) {
    return {
        type: types.LOGOUT_RESPONSE,
        response
    };
}

export function enableLogoutLoader() {
    return {
        type: types.LOGOUT_ENABLE_LOADER
    };
}

export function disableLogoutLoader() {
    return {
        type: types.LOGOUT_DISABLE_LOADER
    };
}