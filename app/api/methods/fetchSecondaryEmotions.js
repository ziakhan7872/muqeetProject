import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchSecondaryEmotions(token) {
    return Api(
        ApiConstants.SECONDARY_EMOTIONS,
        null,
        'get',
        token
    );
}
