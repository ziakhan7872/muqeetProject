import * as types from './types';

export function fetchPersonalFidbackList() {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_LIST_REQUEST,
    };
}

export function onFetchPersonalFidbackListResponse(response) {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_LIST_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_LIST_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_LIST_DISABLE_LOADER
    };
}
