/**
 *  Redux saga class init
 */
import {takeEvery, all} from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';
import registerUserSaga from './registerUserSaga';
import articleFetchSaga from './articleFetchSaga';
import articlesFetchSaga from './articlesFetchSaga';
import relaxationExercisesFetchSaga from './relaxationExercisesFetchSaga';
import lockdownMentalHealthTipsFetchSaga from './lockdownMentalHealthTipsFetchSaga';
import fetchBodyReactionsSaga from './fetchBodyReactionsSaga';
import fetchSubjectsSaga from './fetchSubjectsSaga';
import fetchFidsSaga from './fetchFidsSaga';
import fetchFidsOfDaySaga from './fetchFidsOfDaySaga';
import storeFidSaga from './storeFidSaga';
import storeProfileSaga from './storeProfileSaga';
import resetPasswordSaga from './resetPasswordSaga';
import fetchSecondaryEmotionsSaga from './fetchSecondaryEmotionsSaga';
import sendFidbackRequestSaga from './sendFidbackRequestSaga';
import fetchSubscriptionPlansSaga from './fetchSubscriptionPlansSaga';
import autoFidbacksFetchSaga from './autoFidbacksFetchSaga';
import autoFidbackFetchSaga from './autoFidbackFetchSaga';
import registerPushNotificationTokenSaga from './registerPushNotificationTokenSaga';
import storeAutoFidbackNoteSaga from './storeAutoFidbackNoteSaga';
import storePersonalFidbackProfileSaga from './storePersonalFidbackProfileSaga';
import checkUserSubscriptionSaga from './checkUserSubscriptionSaga';
import fetchPersonalFidbackListSaga from './fetchPersonalFidbackListSaga';
import fetchPersonalFidbackMessagesSaga from './fetchPersonalFidbackMessagesSaga';
import sendPersonalFidbackMessageSaga from './sendPersonalFidbackMessageSaga';
import openSubscriptionPlanSaga from './openSubscriptionPlanSaga';

export default function* watch() {
    yield all([
        takeEvery(types.LOGIN_REQUEST, loginSaga),
        takeEvery(types.LOGOUT_REQUEST, logoutSaga),
        takeEvery(types.REGISTRATION_REQUEST, registerUserSaga),
        takeEvery(types.ARTICLE_FETCH_REQUEST, articleFetchSaga),
        takeEvery(types.ARTICLES_FETCH_REQUEST, articlesFetchSaga),
        takeEvery(types.RELAXATION_EXERCISES_FETCH_REQUEST, relaxationExercisesFetchSaga),
        takeEvery(types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_REQUEST, lockdownMentalHealthTipsFetchSaga),
        takeEvery(types.FETCH_BODY_REACTIONS_REQUEST, fetchBodyReactionsSaga),
        takeEvery(types.FETCH_SUBJECTS_REQUEST, fetchSubjectsSaga),
        takeEvery(types.FETCH_SECONDARY_EMOTIONS_REQUEST, fetchSecondaryEmotionsSaga),
        takeEvery(types.FETCH_FIDS_REQUEST, fetchFidsSaga),
        takeEvery(types.FETCH_FIDS_OF_DAY_REQUEST, fetchFidsOfDaySaga),
        takeEvery(types.STORE_FID_REQUEST, storeFidSaga),
        takeEvery(types.STORE_PROFILE_REQUEST, storeProfileSaga),
        takeEvery(types.RESET_PASSWORD_REQUEST, resetPasswordSaga),
        takeEvery(types.SEND_FIDBACK_REQUEST_REQUEST, sendFidbackRequestSaga),
        takeEvery(types.FETCH_SUBSCRIPTION_PLANS_REQUEST, fetchSubscriptionPlansSaga),
        takeEvery(types.AUTOFIDBACKS_FETCH_REQUEST, autoFidbacksFetchSaga),
        takeEvery(types.AUTOFIDBACK_FETCH_REQUEST, autoFidbackFetchSaga),
        takeEvery(types.REGISTER_PUSH_NOTIFICATION_TOKEN_REQUEST, registerPushNotificationTokenSaga),
        takeEvery(types.AUTOFIDBACK_NOTE_STORE_REQUEST, storeAutoFidbackNoteSaga),
        takeEvery(types.PERSONAL_FIDBACK_PROFILE_STORE_REQUEST, storePersonalFidbackProfileSaga),
        takeEvery(types.CHECK_USER_SUBSCRIPTION_REQUEST, checkUserSubscriptionSaga),
        takeEvery(types.FETCH_PERSONAL_FIDBACK_LIST_REQUEST, fetchPersonalFidbackListSaga),
        takeEvery(types.FETCH_PERSONAL_FIDBACK_MESSAGES_REQUEST, fetchPersonalFidbackMessagesSaga),
        takeEvery(types.SEND_PERSONAL_FIDBACK_MESSAGE_REQUEST, sendPersonalFidbackMessageSaga),
        takeEvery(types.OPEN_SUBSCRIPTION_PLAN_REQUEST, openSubscriptionPlanSaga),
    ]);
}
