import {put, call, select} from 'redux-saga/effects';
import storePersonalFidbackProfile from 'app/api/methods/storePersonalFidbackProfile';
import * as personalFidbackProfileActions from 'app/actions/personalFidbackProfileActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from 'app/actions/loginActions';
import {Alert} from 'react-native';

export default function* storePersonalFidbackProfileAsync(action) {
    yield put(personalFidbackProfileActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(storePersonalFidbackProfile, action.profile, token);

    if (response.status === 'success') {
        yield put(personalFidbackProfileActions.onStorePersonalFidbackProfileResponse(response.payload));
        yield put(personalFidbackProfileActions.disableLoader({}));
        Alert.alert(
            '',
            'Το προφίλ σου αποθηκεύτηκε επιτυχώς!',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
        yield call(navigationActions.navigateToPersonalFidbackList);
    } else {
        if (response.code && response.code === 403) {
            yield put(personalFidbackProfileActions.disableLoader({}));
            yield call(navigationActions.navigateToLogin);
            yield put(loginActions.logout());
            // AlertHelper.show('error', '', 'Συνδέσου για να έχεις πρόσβαση στο FiD!');
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            yield put(personalFidbackProfileActions.disableLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Έλεγξε τη σύνδεσή σου στο Internet.');
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
