import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchAutoFidback(id, token) {
    return Api(
        ApiConstants.AUTOFIDBACK + '/' + id,
        null,
        'get',
        token
    );
}
