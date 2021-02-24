/*
 * Reducer actions related with login
 */
import * as types from './types';

export function registerUser(user) {
    return {
        type: types.REGISTRATION_REQUEST,
        user
    };
}

export function registrationFailed() {
    return {
        type: types.REGISTRATION_FAILED
    };
}

export function onRegistrationResponse(response) {
    return {
        type: types.REGISTRATION_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.REGISTRATION_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.REGISTRATION_DISABLE_LOADER
    };
}
