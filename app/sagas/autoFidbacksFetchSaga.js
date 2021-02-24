import { put, call, select } from 'redux-saga/effects';
import fetchAutoFidbacks from 'app/api/methods/fetchAutoFidbacks';
import * as autoFidbackActions from 'app/actions/autoFidbackActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchAutoFidbacksAsync(action) {
    yield put(autoFidbackActions.enableAutoFidbacksFetchLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchAutoFidbacks, action.nextPageUrl, action.existingAutoFidbacksIds, token);

    if (response.status === 'success') {
        yield put(autoFidbackActions.onFetchAutoFidbacksResponse(response.payload));
        yield put(autoFidbackActions.disableAutoFidbacksFetchLoader({}));
    } else {
        if(response.code && response.code === 403) {
            yield put(autoFidbackActions.disableAutoFidbacksFetchLoader({}));
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
        } else {
            yield put(autoFidbackActions.disableAutoFidbacksFetchLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσαν να φορτωθούν τα autofidbacks. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσαν να φορτωθούν τα autofidbacks. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
