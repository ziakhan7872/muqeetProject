import {put, call, select} from 'redux-saga/effects';
import fetchPersonalFidbackMessages from 'app/api/methods/fetchPersonalFidbackMessages';
import * as personalFidbackMessagesActions from 'app/actions/personalFidbackMessagesActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';
import * as navigationActions from '../actions/navigationActions';

export default function* fetchPersonalFidbackMessagesAsync(action) {
    yield put(personalFidbackMessagesActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchPersonalFidbackMessages, action.id, token);

    if (response.status === 'success') {
        yield put(personalFidbackMessagesActions.onFetchPersonalFidbackMessagesResponse(response.payload));
        yield put(personalFidbackMessagesActions.disableLoader({}));
        yield call(navigationActions.navigateToChat, {personalFidbackId: action.id});
    } else {
        if (response.code && response.code === 403) {
            yield put(personalFidbackMessagesActions.disableLoader({}));
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
            yield put(personalFidbackMessagesActions.disableLoader({}));
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
