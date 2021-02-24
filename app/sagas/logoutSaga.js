import {put, call, select} from 'redux-saga/effects';
import logoutUser from 'app/api/methods/logoutUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';

export default function* logoutAsync() {
    yield put(loginActions.enableLogoutLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(logoutUser, token);

    yield put(loginActions.onLogoutResponse(response));
    yield put(loginActions.disableLogoutLoader({}));

    yield call(navigationActions.navigateToLogin);

}
