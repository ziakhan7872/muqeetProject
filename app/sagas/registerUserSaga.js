import {put, call} from 'redux-saga/effects';
import registerUser from 'app/api/methods/registerUser';
import * as registerActions from 'app/actions/registerActions';
import * as navigationActions from 'app/actions/navigationActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* registerAsync(action) {
    yield put(registerActions.enableLoader());

    const response = yield call(registerUser, action.user);

    if (response.status === 'success') {
        yield put(registerActions.onRegistrationResponse(response));
        yield put(registerActions.disableLoader({}));
        yield call(navigationActions.navigateToTutorial);
    } else if (response.status === 'error') {
        if (response.error_code === '1003') {
            // AlertHelper.show('error', 'Ωχ!', 'Η διεύθυνση email που καταχώρησες υπάρχει ήδη.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Η διεύθυνση email που καταχώρησες υπάρχει ήδη.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δοκίμασε ξανά σε λίγο να ολοκληρώσεις την εγγραφή σου.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δοκίμασε ξανά σε λίγο να ολοκληρώσεις την εγγραφή σου.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
        yield put(registerActions.disableLoader({}));
    } else {
        yield put(registerActions.disableLoader({}));
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
