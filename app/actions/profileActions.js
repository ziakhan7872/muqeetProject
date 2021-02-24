import * as types from './types';

export function storeProfile(profile) {
    return {
        type: types.STORE_PROFILE_REQUEST,
        profile
    };
}

export function onStoreProfileResponse(response) {
    return {
        type: types.STORE_PROFILE_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.STORE_PROFILE_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.STORE_PROFILE_DISABLE_LOADER
    };
}
