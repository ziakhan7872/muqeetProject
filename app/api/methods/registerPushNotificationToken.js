import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function registerPushNotificationToken(pushNotificationToken, os, token) {
    return Api(
        ApiConstants.PUSH_NOTIFICATION,
        {
            notification_token: pushNotificationToken,
            os
        },
        'POST',
        token
    );
}
