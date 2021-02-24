import {put, call} from 'redux-saga/effects';
import resetPassword from 'app/api/methods/resetPassword';
import * as passwordActions from 'app/actions/passwordActions';
import * as navigationActions from 'app/actions/navigationActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* resetPasswordAsync(action) {
    yield put(passwordActions.enableLoader());

    const response = yield call(resetPassword, action.email);

    if (response.status === 'success') {
        yield put(passwordActions.onResetPasswordResponse(response));
        yield put(passwordActions.disableLoader({}));
        yield call(navigationActions.navigateToLogin);
        // AlertHelper.show('success', '', 'Έγινε αποστολή email με λεπτομέρειες για την ανάκτηση του κωδικού πρόσβασής σας.');
        Alert.alert(
            '',
            'Έγινε αποστολή email με λεπτομέρειες για την ανάκτηση του κωδικού πρόσβασής σας.',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
    } else if (response.status === 'error' && response.code === 4004) {
        yield put(passwordActions.disableLoader({}));
        // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Το email που εισάγατε δεν είναι καταχωρημένο.');
        Alert.alert(
            'Κάτι πήγε στραβά!',
            'Το email που εισάγατε δεν είναι καταχωρημένο.',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
    } else {
        yield put(passwordActions.disableLoader({}));
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
