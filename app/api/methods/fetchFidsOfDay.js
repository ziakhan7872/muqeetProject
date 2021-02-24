import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchFidsOfDay(date, token) {
    return Api(
        ApiConstants.FID + date.year + '/' + date.month + '/' + date.day,
        null,
        'get',
        token
    );
}
