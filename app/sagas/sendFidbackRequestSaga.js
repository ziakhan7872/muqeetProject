import {put, call, select} from 'redux-saga/effects';
import sendFidbackRequest from 'app/api/methods/sendFidbackRequest';
import * as fidbackRequestActions from 'app/actions/fidbackRequestActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* sendFidbackRequestAsync(action) {
    yield put(fidbackRequestActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(sendFidbackRequest, action.request, token);

    if (response.status === 'success') {
        yield put(fidbackRequestActions.onFidbackRequestResponse(response.payload));
        yield put(fidbackRequestActions.disableLoader({}));
        // AlertHelper.show('success', 'Λάβαμε το αίτημα σου!', '');
        Alert.alert(
            '',
            'Λάβαμε το αίτημα σου!',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
        yield call(navigationActions.navigateToPersonalFidbackList);
    } else {
        if (response.code && response.code === 403) {
            yield put(fidbackRequestActions.disableLoader({}));
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
            yield put(fidbackRequestActions.disableLoader({}));
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
