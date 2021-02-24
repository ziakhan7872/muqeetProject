import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function sendPersonalFidbackMessage(message, token) {
    return Api(
        ApiConstants.PERSONAL_FIDBACK_MESSAGE,
        {
            personalFidbackId: message.personalFidbackId,
            content: message.text
        },
        'post',
        token
    );
}
