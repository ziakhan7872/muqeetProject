import {put, call, select} from 'redux-saga/effects';
import fetchRelaxationExercises from 'app/api/methods/fetchRelaxationExercises';
import * as blogActions from 'app/actions/blogActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchRelaxationExercisesAsync(action) {
    yield put(blogActions.enableRelaxationExercisesLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchRelaxationExercises, action.relaxationExercisesNextPageUrl, action.existingRelaxationExercisesIds, token);

    if (response.status === 'success') {
        yield put(blogActions.onRelaxationExercisesFetchResponse(response.payload));
        yield put(blogActions.disableRelaxationExercisesLoader({}));
    } else {
        if (response.code && response.code === 403) {
            yield put(blogActions.disableRelaxationExercisesLoader({}));
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
            yield put(blogActions.disableRelaxationExercisesLoader({}));
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
