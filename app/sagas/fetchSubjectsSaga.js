import {put, call, select} from 'redux-saga/effects';
import fetchSubjects from 'app/api/methods/fetchSubjects';
import * as fidActions from 'app/actions/fidActions';
import * as navigationActions from '../actions/navigationActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchSubjectsAsync() {
    yield put(fidActions.enableSubjectsLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchSubjects, token);

    if (response.status === 'success') {
        yield put(fidActions.onFetchSubjectsResponse(response.payload));
        yield put(fidActions.disableSubjectsLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(fidActions.disableSubjectsLoader({}));
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
            yield put(fidActions.disableSubjectsLoader({}));
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
