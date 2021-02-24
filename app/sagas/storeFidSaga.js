import {put, call, select} from 'redux-saga/effects';
import storeFid from 'app/api/methods/storeFid';
import * as fidActions from 'app/actions/fidActions';
import * as navigationActions from '../actions/navigationActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* storeFidAsync(action) {
    yield put(fidActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(storeFid, action.fid, token);

    if (response.status === 'success') {
        yield put(fidActions.onStoreFidResponse(response.payload));
        yield put(fidActions.disableLoader({}));
        // AlertHelper.show('success', 'Τέλεια!', 'Το FiD σου αποθηκεύτηκε, δες το στο ημερολόγιο σου!');
        Alert.alert(
            'Τέλεια!',
            'Το FiD σου αποθηκεύτηκε, δες το στο ημερολόγιο σου!',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
    } else {
        if (response.code && response.code === 403) {
            yield put(fidActions.disableLoader({}));
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
            yield put(fidActions.disableLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσαν να αποθηκευτεί το συναίσθημά σου. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσαν να αποθηκευτεί το συναίσθημά σου. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
