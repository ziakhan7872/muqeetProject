/*
 * Reducer actions related with login
 */
import * as types from './types';

export function sendFidbackRequest(request) {
    return {
        type: types.SEND_FIDBACK_REQUEST_REQUEST,
        request
    };
}

export function onFidbackRequestResponse(response) {
    return {
        type: types.SEND_FIDBACK_REQUEST_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.SEND_FIDBACK_REQUEST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.SEND_FIDBACK_REQUEST_DISABLE_LOADER
    };
}
