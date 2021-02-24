import {put, call, select} from 'redux-saga/effects';
import fetchFids from 'app/api/methods/fetchFids';
import * as fidActions from 'app/actions/fidActions';
import * as navigationActions from '../actions/navigationActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';

export default function* fetchFidsAsync(action) {
    yield put(fidActions.enableFetchFidsLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchFids, action.date, token);

    if (response.status === 'success') {
        yield put(fidActions.onFetchFidsResponse(response.payload));
        yield put(fidActions.disableFetchFidsLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(fidActions.disableFetchFidsLoader({}));
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
            yield put(fidActions.disableFetchFidsLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσαν να φορτωθούν τα FiD σου. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσαν να φορτωθούν τα FiD σου. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
