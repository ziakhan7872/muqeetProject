import * as types from './types';

// store fid
export function storeFid(fid) {
    return {
        type: types.STORE_FID_REQUEST,
        fid
    };
}

export function storeFidFailed() {
    return {
        type: types.STORE_FID_FAILED
    };
}

export function onStoreFidResponse(response) {
    return {
        type: types.STORE_FID_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.STORE_FID_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.STORE_FID_DISABLE_LOADER
    };
}

// fetch fid
export function fetchFids(date) {
    return {
        type: types.FETCH_FIDS_REQUEST,
        date
    };
}

export function onFetchFidsResponse(response) {
    return {
        type: types.FETCH_FIDS_RESPONSE,
        response
    };
}

export function enableFetchFidsLoader() {
    return {
        type: types.FETCH_FIDS_ENABLE_LOADER
    };
}

export function disableFetchFidsLoader() {
    return {
        type: types.FETCH_FIDS_DISABLE_LOADER
    };
}

// fetch fids of day
export function fetchFidsOfDay(date) {
    return {
        type: types.FETCH_FIDS_OF_DAY_REQUEST,
        date
    };
}

export function onFetchFidsOfDayResponse(response) {
    return {
        type: types.FETCH_FIDS_OF_DAY_RESPONSE,
        response
    };
}

export function enableFetchFidsOfDayLoader() {
    return {
        type: types.FETCH_FIDS_OF_DAY_ENABLE_LOADER
    };
}

export function disableFetchFidsOfDayLoader() {
    return {
        type: types.FETCH_FIDS_OF_DAY_DISABLE_LOADER
    };
}

// fetch body reactions
export function fetchBodyReactions(emotionId) {
    return {
        type: types.FETCH_BODY_REACTIONS_REQUEST,
        emotionId
    };
}

export function fetchBodyReactionsFailed() {
    return {
        type: types.FETCH_BODY_REACTIONS_FAILED
    };
}

export function onFetchBodyReactionsResponse(response) {
    return {
        type: types.FETCH_BODY_REACTIONS_RESPONSE,
        response
    };
}

export function enableBodyReactionsLoader() {
    return {
        type: types.FETCH_BODY_REACTIONS_ENABLE_LOADER
    };
}

export function disableBodyReactionsLoader() {
    return {
        type: types.FETCH_BODY_REACTIONS_DISABLE_LOADER
    };
}

// fetch subjects
export function fetchSubjects() {
    return {
        type: types.FETCH_SUBJECTS_REQUEST,
    };
}

export function onFetchSubjectsResponse(response) {
    return {
        type: types.FETCH_SUBJECTS_RESPONSE,
        response
    };
}

export function enableSubjectsLoader() {
    return {
        type: types.FETCH_SUBJECTS_ENABLE_LOADER
    };
}

export function disableSubjectsLoader() {
    return {
        type: types.FETCH_SUBJECTS_DISABLE_LOADER
    };
}

// fetch secondary emotions
export function fetchSecondaryEmotions() {
    return {
        type: types.FETCH_SECONDARY_EMOTIONS_REQUEST
    };
}


export function onFetchSecondaryEmotionsResponse(response) {
    return {
        type: types.FETCH_SECONDARY_EMOTIONS_RESPONSE,
        response
    };
}

export function enableSecondaryEmotionsLoader() {
    return {
        type: types.FETCH_SECONDARY_EMOTIONS_ENABLE_LOADER
    };
}

export function disableSecondaryEmotionsLoader() {
    return {
        type: types.FETCH_SECONDARY_EMOTIONS_DISABLE_LOADER
    };
}