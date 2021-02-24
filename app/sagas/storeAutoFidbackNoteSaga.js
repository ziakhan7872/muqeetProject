import {put, call, select} from 'redux-saga/effects';
import storeAutofidbackNote from 'app/api/methods/storeAutofidbackNote';
import * as autoFidbackActions from 'app/actions/autoFidbackActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';
// import {AlertHelper} from '../utils/AlertHelper';

export default function* storeAutoFidbackNoteAsync(action) {
    yield put(autoFidbackActions.enableStoreAutoFidbackNoteLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(storeAutofidbackNote, action.note, action.uuid, token);

    if (response.status === 'success') {
        yield put(autoFidbackActions.onStoreAutoFidbackNoteResponse(response.payload));
        yield put(autoFidbackActions.disableStoreAutoFidbackNoteLoader());
        // AlertHelper.show('success', 'Επιτυχία!', 'Η σημείωση σου αποθηκέυτηκε επιτυχώς');
        Alert.alert(
            'Επιτυχία!',
            'Η σημείωση σου αποθηκέυτηκε επιτυχώς!',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
    } else {
        if (response.code && response.code === 403) {
            yield put(autoFidbackActions.disableStoreAutoFidbackNoteLoader({}));
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
            yield put(autoFidbackActions.disableStoreAutoFidbackNoteLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσαν να αποθηκευτεί το συναίσθημά σου. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
