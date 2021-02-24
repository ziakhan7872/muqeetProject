import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(email, password) {
    return Api(
        ApiConstants.LOGIN,
        {email: email, password: password},
        'POST',
        null
    );
}
