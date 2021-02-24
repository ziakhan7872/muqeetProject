import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function checkUserSubscription(token) {
    return Api(
        ApiConstants.USER_SUBSCRIPTION,
        null,
        'get',
        token
    );
}
