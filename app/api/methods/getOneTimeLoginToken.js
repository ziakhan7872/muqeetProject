import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function getOneTimeLoginToken(id, token) {
    return Api(
        ApiConstants.ONE_TIME_LOGIN_TOKEN,
        {
            subscription_plan_id: id
        },
        'post',
        token
    );
}
