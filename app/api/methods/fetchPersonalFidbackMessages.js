import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchPersonalFidbackMessages(id, token) {
    return Api(
        ApiConstants.PERSONAL_FIDBACK + '/' + id,
        null,
        'get',
        token
    );
}
