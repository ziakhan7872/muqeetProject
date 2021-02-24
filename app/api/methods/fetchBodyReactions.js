import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchBodyReactions(emotionId, token) {
    return Api(
        ApiConstants.BODY_REACTION + emotionId,
        null,
        'get',
        token
    );
}
