import {put, call} from 'redux-saga/effects';
import fetchSubscriptionPlans from 'app/api/methods/fetchSubscriptionPlans';
import * as subscriptionActions from 'app/actions/subscriptionActions';
// import {AlertHelper} from '../utils/AlertHelper';
import {Alert} from 'react-native';

export default function* fetchSubscriptionPlansAsync() {
    yield put(subscriptionActions.enableSubscriptionPlansLoader());

    const response = yield call(fetchSubscriptionPlans);

    if (response.status === 'success') {
        yield put(subscriptionActions.onFetchSubscriptionPlansResponse(response.payload));
        yield put(subscriptionActions.disableSubscriptionPlansLoader({}));
    } else {
        yield put(subscriptionActions.disableSubscriptionPlansLoader({}));
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
