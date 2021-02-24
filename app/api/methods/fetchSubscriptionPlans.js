import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchSubscriptionPlans() {
    return Api(
        ApiConstants.SUBSCRIPTION_PLANS,
        null,
        'GET',
        null
    );
}
