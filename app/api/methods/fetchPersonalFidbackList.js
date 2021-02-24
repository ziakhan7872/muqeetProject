import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchPersonalFidbackList(token) {
    return Api(
        ApiConstants.PERSONAL_FIDBACK,
        null,
        'get',
        token
    );
}
