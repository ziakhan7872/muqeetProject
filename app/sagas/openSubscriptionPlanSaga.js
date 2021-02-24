import {put, call, select} from 'redux-saga/effects';
import getOneTimeLoginToken from 'app/api/methods/getOneTimeLoginToken';
import * as subscriptionActions from 'app/actions/subscriptionActions';
import * as navigationActions from '../actions/navigationActions';
import * as loginActions from '../actions/loginActions';
import {Alert, Linking } from 'react-native';

export default function* openSubscriptionPlanAsync(action) {
    yield put(subscriptionActions.enableOpenSubscriptionPlanLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(getOneTimeLoginToken, action.id, token);

    if (response.status === 'success') {
        yield put(subscriptionActions.onOpenSubscriptionPlanResponse());
        yield put(subscriptionActions.disableOpenSubscriptionPlanLoader({}));
        Linking.openURL(response.payload.url);
    } else {
        if (response.code && response.code === 403) {
            yield put(subscriptionActions.disableOpenSubscriptionPlanLoader({}));
            yield call(navigationActions.navigateToLogin);
            yield put(loginActions.logout());
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            yield put(subscriptionActions.disableOpenSubscriptionPlanLoader({}));
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
