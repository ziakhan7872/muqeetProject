import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function logoutUser(token) {
    return Api(
        ApiConstants.LOGOUT,
        {},
        'POST',
        token
    );
}
