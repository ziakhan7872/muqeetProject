import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchSubjects(token) {
    return Api(
        ApiConstants.SUBJECTS,
        null,
        'get',
        token
    );
}
