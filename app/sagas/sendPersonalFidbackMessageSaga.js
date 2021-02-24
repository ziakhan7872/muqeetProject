import {put, call, select} from 'redux-saga/effects';
import sendPersonalFidbackMessage from 'app/api/methods/sendPersonalFidbackMessage';
import * as personalFidbackMessagesActions from 'app/actions/personalFidbackMessagesActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';

export default function* sendPersonalFidbackMessageAsync(action) {
    yield put(personalFidbackMessagesActions.enableSendMessageLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(sendPersonalFidbackMessage, action.message, token);

    if (response.status === 'success') {
        yield put(personalFidbackMessagesActions.onSendPersonalFidbackMessageResponse(response.payload));
        yield put(personalFidbackMessagesActions.disableSendMessageLoader());
    } else {
        if (response.code && response.code === 403) {
            yield put(personalFidbackMessagesActions.disableSendMessageLoader());
            yield call(loginActions.logout);
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            yield put(personalFidbackMessagesActions.disableSendMessageLoader());
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσε να φορτωθεί το personal fidback. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
