import * as types from './types';

export function storePersonalFidbackProfile(profile) {
    return {
        type: types.PERSONAL_FIDBACK_PROFILE_STORE_REQUEST,
        profile
    };
}

export function onStorePersonalFidbackProfileResponse(response) {
    return {
        type: types.PERSONAL_FIDBACK_PROFILE_STORE_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.PERSONAL_FIDBACK_PROFILE_STORE_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.PERSONAL_FIDBACK_PROFILE_STORE_DISABLE_LOADER
    };
}
