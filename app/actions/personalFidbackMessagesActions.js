import * as types from './types';

export function fetchPersonalFidbackMessages(id) {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_MESSAGES_REQUEST,
        id
    };
}

export function onFetchPersonalFidbackMessagesResponse(response) {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_MESSAGES_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_MESSAGES_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.FETCH_PERSONAL_FIDBACK_MESSAGES_DISABLE_LOADER
    };
}

// Send message
export function sendPersonalFidbackMessage(message) {
    return {
        type: types.SEND_PERSONAL_FIDBACK_MESSAGE_REQUEST,
        message
    };
}

export function onSendPersonalFidbackMessageResponse(response) {
    return {
        type: types.SEND_PERSONAL_FIDBACK_MESSAGE_RESPONSE,
        response
    };
}

export function enableSendMessageLoader() {
    return {
        type: types.SEND_PERSONAL_FIDBACK_MESSAGE_ENABLE_LOADER
    };
}

export function disableSendMessageLoader() {
    return {
        type: types.SEND_PERSONAL_FIDBACK_MESSAGE_DISABLE_LOADER
    };
}