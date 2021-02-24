import {put, call, select} from 'redux-saga/effects';
import storeProfile from 'app/api/methods/storeProfile';
import * as profileActions from 'app/actions/profileActions';
import * as navigationActions from '../actions/navigationActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';
// import {AlertHelper} from '../utils/AlertHelper';

export default function* storeProfileAsync(action) {
    yield put(profileActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(storeProfile, action.profile, token);

    if (response.status === 'success') {
        yield put(profileActions.onStoreProfileResponse(response.payload));
        yield put(profileActions.disableLoader({}));
        yield put(loginActions.updateUser(action.profile));
        Alert.alert(
            'Τέλεια!',
            'Το προφίλ σου ενημερώθηκε!',
            [
                {text: 'ΕΝΤΑΞΕΙ'},
            ],
            {cancelable: false},
        );
        yield call(navigationActions.navigateToHome);
    } else {
        if (response.code && response.code === 403) {
            yield put(profileActions.disableLoader({}));
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
            yield put(profileActions.disableLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσαν να αποθηκευτεί το προφίλ σου. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσαν να αποθηκευτεί το προφίλ σου. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
