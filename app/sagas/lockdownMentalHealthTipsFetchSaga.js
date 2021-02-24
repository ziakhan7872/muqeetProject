import {put, call, select} from 'redux-saga/effects';
import fetchLockdownMentalHealthTips from 'app/api/methods/fetchLockdownMentalHealthTips';
import * as blogActions from 'app/actions/blogActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';

export default function* fetchLockdownMentalHealthTipsAsync(action) {
    yield put(blogActions.enableLockdownMentalHealthTipsLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchLockdownMentalHealthTips, action.lockdownMentalHealthTipsNextPageUrl, token);

    if (response.status === 'success') {
        yield put(blogActions.onLockdownMentalHealthTipsFetchResponse(response.payload));
        yield put(blogActions.disableLockdownMentalHealthTipsLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(blogActions.disableLockdownMentalHealthTipsLoader({}));
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
            yield put(blogActions.disableLockdownMentalHealthTipsLoader({}));
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
