import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function resetPassword(email) {
    return Api(
        ApiConstants.PASSWORD_RESET,
        {email: email},
        'post',
        null
    );
}
