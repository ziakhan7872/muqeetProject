import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchFids(date, token) {
    return Api(
        ApiConstants.FID + date.year + '/' + date.month,
        null,
        'get',
        token
    );
}
