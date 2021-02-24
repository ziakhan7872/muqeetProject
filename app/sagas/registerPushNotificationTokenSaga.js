import { put, call, select } from 'redux-saga/effects';
import registerPushNotificationToken from 'app/api/methods/registerPushNotificationToken';
import * as pushNotificationActions from 'app/actions/pushNotificationActions';
import * as fidActions from '../actions/fidActions';

export default function* registerPushNotificationTokenAsync(action) {
    yield put(pushNotificationActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(registerPushNotificationToken, action.token, token);

    if (response.status === 'success') {
        yield put(pushNotificationActions.onRegisterPushNotificationTokenResponse(response));
        yield put(pushNotificationActions.disableLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(pushNotificationActions.disableLoader({}));
        } else {
            yield put(fidActions.disableLoader({}));
        }
    }
}
