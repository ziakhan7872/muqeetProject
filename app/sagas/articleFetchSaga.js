import {put, call, select} from 'redux-saga/effects';
import fetchArticle from 'app/api/methods/fetchArticle';
import * as blogActions from 'app/actions/blogActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from '../actions/loginActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchArticleAsync(action) {
    yield put(blogActions.enableArticleLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchArticle, action.id, token);

    if (response.status === 'success') {
        yield put(blogActions.onArticleFetchResponse(response.payload));
        yield put(blogActions.disableArticleLoader({}));
        yield call(navigationActions.navigateToArticle);
    } else {
        if (response.code && response.code === 403) {
            yield put(blogActions.disableArticlesLoader({}));
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
            yield put(blogActions.disableArticlesLoader({}));
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
