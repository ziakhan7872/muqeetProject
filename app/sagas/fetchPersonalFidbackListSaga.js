import {put, call, select} from 'redux-saga/effects';
import fetchPersonalFidbackList from 'app/api/methods/fetchPersonalFidbackList';
import * as personalFidbackListActions from 'app/actions/personalFidbackListActions';
import * as loginActions from '../actions/loginActions';
import {Alert} from 'react-native';

export default function* fetchPersonalFidbackListAsync(action) {
    yield put(personalFidbackListActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchPersonalFidbackList, token);

    if (response.status === 'success') {
        yield put(personalFidbackListActions.onFetchPersonalFidbackListResponse(response.payload));
        yield put(personalFidbackListActions.disableLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(personalFidbackListActions.disableLoader({}));
            yield call(loginActions.logout);
            Alert.alert(
                '',
                'Συνδέσου για να έχεις πρόσβαση στο FiD!',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        } else {
            yield put(personalFidbackListActions.disableLoader({}));
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσε να φορτωθεί το personal fidback. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
