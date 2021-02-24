import {put, call, select} from 'redux-saga/effects';
import checkUserSubscription from 'app/api/methods/checkUserSubscription';
import * as personalFidbackSubscriptionActions from 'app/actions/personalFidbackSubscriptionActions';
import * as navigationActions from 'app/actions/navigationActions';
import * as loginActions from 'app/actions/loginActions';
import {Alert} from 'react-native';

export default function* checkUserSubscriptionAsync() {
    yield put(personalFidbackSubscriptionActions.enableLoader());

    const state = yield select();
    const token = state.loginReducer.token;

    const response = yield call(checkUserSubscription, token);

    if (response.status === 'success') {
        yield put(personalFidbackSubscriptionActions.onCheckUserSubscriptionResponse(response.payload));
        yield put(personalFidbackSubscriptionActions.disableLoader({}));
        if (response.payload.has_active_subscription) {
            yield call(navigationActions.navigateToPersonalFidbackRequest);
        } else {
            Alert.alert(
                '',
                'Το δωρεάν personal fidback για αυτήν την εβδομάδα έχει εξαντληθεί.',
                [
                    {
                        text: 'ΕΝΤΑΞΕΙ',
                        style: 'cancel'
                    },
                ],
                {cancelable: false},
            );
            // Alert.alert(
            //     '',
            //     'Δυστυχώς έχεις εξαντλήσει τα αιτήματά σου για Personal FiDback. Θέλεις να κάνεις ένα νέο αίτημα;',
            //     [
            //         {
            //             text: 'ΝΑΙ ΘΕΛΩ',
            //             onPress: () => navigationActions.navigateToSubscriptionPlans()
            //         },
            //         {
            //             text: 'ΟΧΙ ΑΚΟΜΑ',
            //             style: 'cancel'
            //         },
            //     ],
            //     {cancelable: false},
            // );
        }
    } else {
        if (response.code && response.code === 403) {
            yield put(personalFidbackSubscriptionActions.disableLoader({}));
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
            yield put(personalFidbackSubscriptionActions.disableLoader({}));
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
