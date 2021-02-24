import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function storeAutoFidbackNote(note, uuid, token) {
    return Api(
        ApiConstants.AUTOFIDBACK_NOTE,
        {
            autofidback_uuid: uuid,
            note: note
        },
        'post',
        token
    );
}
