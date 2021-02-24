/*
 * Reducer actions related with login
 */
import * as types from './types';

export function fetchAutoFidbacks(nextPageUrl, existingAutoFidbacksIds) {
    return {
        type: types.AUTOFIDBACKS_FETCH_REQUEST,
        nextPageUrl,
        existingAutoFidbacksIds
    };
}

export function onFetchAutoFidbacksResponse(response) {
    return {
        type: types.AUTOFIDBACKS_FETCH_RESPONSE,
        response
    };
}

export function enableAutoFidbacksFetchLoader() {
    return {
        type: types.AUTOFIDBACKS_FETCH_ENABLE_LOADER
    };
}

export function disableAutoFidbacksFetchLoader() {
    return {
        type: types.AUTOFIDBACKS_FETCH_DISABLE_LOADER
    };
}

export function fetchAutoFidback(id) {
    return {
        type: types.AUTOFIDBACK_FETCH_REQUEST,
        id
    };
}

export function onFetchAutoFidbackResponse(response) {
    return {
        type: types.AUTOFIDBACK_FETCH_RESPONSE,
        response
    };
}

export function enableAutoFidbackFetchLoader() {
    return {
        type: types.AUTOFIDBACK_FETCH_ENABLE_LOADER
    };
}

export function disableAutoFidbackFetchLoader() {
    return {
        type: types.AUTOFIDBACK_FETCH_DISABLE_LOADER
    };
}


export function storeAutoFidbackNote(note, uuid) {
    return {
        type: types.AUTOFIDBACK_NOTE_STORE_REQUEST,
        note,
        uuid
    };
}

export function onStoreAutoFidbackNoteResponse(response) {
    return {
        type: types.AUTOFIDBACK_NOTE_STORE_RESPONSE,
        response
    };
}

export function enableStoreAutoFidbackNoteLoader() {
    return {
        type: types.AUTOFIDBACK_NOTE_STORE_ENABLE_LOADER
    };
}

export function disableStoreAutoFidbackNoteLoader() {
    return {
        type: types.AUTOFIDBACK_NOTE_STORE_DISABLE_LOADER
    };
}