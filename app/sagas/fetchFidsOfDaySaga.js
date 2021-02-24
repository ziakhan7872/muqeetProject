import {put, call, select} from 'redux-saga/effects';
import fetchFidsOfDay from 'app/api/methods/fetchFidsOfDay';
import * as fidActions from 'app/actions/fidActions';
import * as navigationActions from '../actions/navigationActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';

export default function* fetchFidsOfDayAsync(action) {
    yield put(fidActions.enableFetchFidsOfDayLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchFidsOfDay, action.date, token);

    if (response.status === 'success') {
        yield put(fidActions.onFetchFidsOfDayResponse(response.payload));
        yield put(fidActions.disableFetchFidsOfDayLoader({}));
        yield call(navigationActions.navigateToCalendarItem, {day: action.date});
    } else {
        if (response.code && response.code === 403) {
            yield put(fidActions.disableFetchFidsOfDayLoader({}));
            yield call(navigationActions.navigateToLogin);
            yield put(loginActions.logout());
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            yield put(fidActions.disableFetchFidsOfDayLoader({}));
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
