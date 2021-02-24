import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function sendFidbackRequest(request, token) {
    return Api(
        ApiConstants.FIDBACK_REQUEST,
        request,
        'POST',
        token
    );
}
