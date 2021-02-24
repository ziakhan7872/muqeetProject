import {put, call, select} from 'redux-saga/effects';
import fetchSecondaryEmotions from 'app/api/methods/fetchSecondaryEmotions';
import * as fidActions from 'app/actions/fidActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchSecondaryEmotionsAsync() {
    yield put(fidActions.enableSecondaryEmotionsLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchSecondaryEmotions, token);

    if (response.status === 'success') {
        yield put(fidActions.onFetchSecondaryEmotionsResponse(response.payload));
        yield put(fidActions.disableSecondaryEmotionsLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(fidActions.disableSecondaryEmotionsLoader({}));
            yield call(loginActions.logout);
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
            yield put(fidActions.disableSecondaryEmotionsLoader({}));
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
