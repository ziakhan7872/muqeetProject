import {put, call, select} from 'redux-saga/effects';
import fetchAutoFidback from 'app/api/methods/fetchAutoFidback';
import * as autoFidbackActions from 'app/actions/autoFidbackActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchAutoFidbackAsync(action) {
    yield put(autoFidbackActions.enableAutoFidbackFetchLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchAutoFidback, action.id, token);

    if (response.status === 'success') {
        yield put(autoFidbackActions.onFetchAutoFidbackResponse(response.payload));
        yield put(autoFidbackActions.disableAutoFidbackFetchLoader({}));
        yield call(navigationActions.navigateToAutoFidbackItem);
    } else {
        if (response.code && response.code === 403) {
            yield put(autoFidbackActions.disableAutoFidbackFetchLoader({}));
            yield call(loginActions.logout);
            // AlertHelper.show('error', '', 'Συνδέσου για να έχεις πρόσβαση στο FiD!');
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else if (response.code === 404) {
            yield call(navigationActions.navigateToAutoFidbackItem);
            // AlertHelper.show('warn', '', 'Δεν βρέθηκε στον διακομιστή το auto fidback!');
            Alert.alert(
                '',
                'Δεν βρέθηκε στον διακομιστή το auto fidback!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            yield put(autoFidbackActions.disableAutoFidbackFetchLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσε να φορτωθεί το άρθρο. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσε να φορτωθεί το άρθρο. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
