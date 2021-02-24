import { put, call, select } from 'redux-saga/effects';
import fetchArticles from 'app/api/methods/fetchArticles';
import * as blogActions from 'app/actions/blogActions';
import * as loginActions from '../actions/loginActions';
import * as navigationActions from '../actions/navigationActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchArticleAsync(action) {
    yield put(blogActions.enableArticlesLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(fetchArticles, action.nextPageUrl, action.existingArticlesIds, token);

    if (response.status === 'success') {
        yield put(blogActions.onArticlesFetchResponse(response.payload));
        yield put(blogActions.disableArticlesLoader({}));
    } else {
        if(response.code && response.code === 403) {
            yield put(blogActions.disableArticlesLoader({}));
            yield call(navigationActions.navigateToArticle);
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
            yield put(blogActions.disableArticlesLoader({}));
            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Δεν μπόρεσαν να φορτωθούν νέα άρθρα. Έλεγξε τη σύνδεσή σου στο Internet.');
            Alert.alert(
                'Κάτι πήγε στραβά!',
                'Δεν μπόρεσαν να φορτωθούν νέα άρθρα. Έλεγξε τη σύνδεσή σου στο Internet.',
                [
                    {text: 'ΕΝΤΑΞΕΙ'},
                ],
                {cancelable: false},
            );
        }
    }
}
