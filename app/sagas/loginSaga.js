/* Redux saga class
 * logins the user into the app
 * requires email and password.
 */
import {put, call} from 'redux-saga/effects';
import loginUser from 'app/api/methods/loginUser';
import registerPushNotificationToken from 'app/api/methods/registerPushNotificationToken';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert, Platform} from 'react-native';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
    yield put(loginActions.enableLoader());

    const response = yield call(loginUser, action.email, action.password);

    if (response.status === 'success') {
        yield put(loginActions.onLoginResponse(response));
        yield put(loginActions.disableLoader({}));

        if (action.notificationToken !== response.notification_token) {
            yield call(registerPushNotificationToken, action.notificationToken, Platform.OS, response.token);
        }

        yield call(navigationActions.navigateToHome);
    } else {
        yield put(loginActions.disableLoader({}));
        // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Έλεγξε αν έχεις καταχωρήσει τα στοιχεία σου σωστά ή τη σύνδεσή σου στο Internet.');
        Alert.alert(
            'Κάτι πήγε στραβά!',
            'Έλεγξε αν έχεις καταχωρήσει τα στοιχεία σου σωστά ή τη σύνδεσή σου στο Internet.',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
    }
}
