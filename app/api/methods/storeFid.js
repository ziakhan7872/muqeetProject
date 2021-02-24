import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function storeFid(fid, token) {
    return Api(
        ApiConstants.FID + 'store',
        fid,
        'post',
        token
    );
}
