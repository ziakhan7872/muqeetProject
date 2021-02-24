/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoginLoading: false,
    isLogoutLoading: false,
    isArticlesFetchLoading: false,
    isRelaxationExercisesFetchLoading: false,
    isLockdownMentalHealthTipsFetchLoading: false,
    isArticleFetchLoading: false,
    isRegistrationLoading: false,
    isStoreFidLoading: false,
    isFetchBodyReactionsLoading: false,
    isFetchFidsLoading:false,
    isFetchFidsOfDayLoading:false,
    isFetchSubjectsLoading: false,
    isFetchProfileLoading: false,
    isStoreProfileLoading: false,
    isResetPasswordLoading: false,
    isFetchSecondaryEmotionsLoading: false,
    isSendFidbackRequestLoading: false,
    isFetchSubscriptionPlansLoading: false,
    isFetchUserSubscriptionLoading: false,
    isFetchAutoFidbacksLoading:false,
    isFetchAutoFidbackLoading:false,
    isStoreAutofidbackNoteLoading: false,
    isFetchingUserSubscriptionLoading: false,
    isFetchPersonalFidbackListLoading: false,
    isFetchingPersonalFidbackMessagesLoading: false,
    isSendingPersonalFidbackMessageLoading: false,
    isOpenSubscriptionPlanLoading: false,
};

export const loadingReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state) {
        return { ...state, isLoginLoading: true };
    },
    [types.LOGIN_DISABLE_LOADER](state) {
        return { ...state, isLoginLoading: false };
    },
    [types.LOGOUT_ENABLE_LOADER](state) {
        return { ...state, isLogoutLoading: true };
    },
    [types.LOGOUT_DISABLE_LOADER](state) {
        return { ...state, isLogoutLoading: false };
    },
    [types.REGISTRATION_ENABLE_LOADER](state) {
        return { ...state, isRegistrationLoading: true };
    },
    [types.REGISTRATION_DISABLE_LOADER](state) {
        return { ...state, isRegistrationLoading: false };
    },
    [types.ARTICLES_FETCH_ENABLE_LOADER](state) {
        return { ...state, isArticlesFetchLoading: true };
    },
    [types.ARTICLES_FETCH_DISABLE_LOADER](state) {
        return { ...state, isArticlesFetchLoading: false };
    },
    [types.RELAXATION_EXERCISES_FETCH_ENABLE_LOADER](state) {
        return { ...state, isRelaxationExercisesFetchLoading: true };
    },
    [types.RELAXATION_EXERCISES_FETCH_DISABLE_LOADER](state) {
        return { ...state, isRelaxationExercisesFetchLoading: false };
    },
    [types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_ENABLE_LOADER](state) {
        return { ...state, isLockdownMentalHealthTipsFetchLoading: true };
    },
    [types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_DISABLE_LOADER](state) {
        return { ...state, isLockdownMentalHealthTipsFetchLoading: false };
    },
    [types.ARTICLE_FETCH_ENABLE_LOADER](state) {
        return { ...state, isArticleFetchLoading: true };
    },
    [types.ARTICLE_FETCH_DISABLE_LOADER](state) {
        return { ...state, isArticleFetchLoading: false };
    },
    [types.STORE_FID_ENABLE_LOADER](state) {
        return { ...state, isStoreFidLoading: true };
    },
    [types.STORE_FID_DISABLE_LOADER](state) {
        return { ...state, isStoreFidLoading: false };
    },
    [types.FETCH_BODY_REACTIONS_ENABLE_LOADER](state) {
        return { ...state, isFetchBodyReactionsLoading: true };
    },
    [types.FETCH_BODY_REACTIONS_DISABLE_LOADER](state) {
        return { ...state, isFetchBodyReactionsLoading: false };
    },
    [types.FETCH_SUBJECTS_ENABLE_LOADER](state) {
        return { ...state, isFetchSubjectsLoading: true };
    },
    [types.FETCH_SUBJECTS_DISABLE_LOADER](state) {
        return { ...state, isFetchSubjectsLoading: false };
    },
    [types.FETCH_SECONDARY_EMOTIONS_ENABLE_LOADER](state) {
        return { ...state, isFetchSecondaryEmotionsLoading: true };
    },
    [types.FETCH_SECONDARY_EMOTIONS_DISABLE_LOADER](state) {
        return { ...state, isFetchSecondaryEmotionsLoading: false };
    },
    [types.FETCH_FIDS_ENABLE_LOADER](state) {
        return { ...state, isFetchFidsLoading: true };
    },
    [types.FETCH_FIDS_DISABLE_LOADER](state) {
        return { ...state, isFetchFidsLoading: false };
    },
    [types.FETCH_FIDS_OF_DAY_ENABLE_LOADER](state) {
        return { ...state, isFetchFidsOfDayLoading: true };
    },
    [types.FETCH_FIDS_OF_DAY_DISABLE_LOADER](state) {
        return { ...state, isFetchFidsOfDayLoading: false };
    },
    [types.FETCH_PROFILE_ENABLE_LOADER](state) {
        return { ...state, isFetchProfileLoading: true };
    },
    [types.FETCH_PROFILE_DISABLE_LOADER](state) {
        return { ...state, isFetchProfileLoading: false };
    },
    [types.STORE_PROFILE_ENABLE_LOADER](state) {
        return { ...state, isStoreProfileLoading: true };
    },
    [types.STORE_PROFILE_DISABLE_LOADER](state) {
        return { ...state, isStoreProfileLoading: false };
    },
    [types.RESET_PASSWORD_ENABLE_LOADER](state) {
        return { ...state, isResetPasswordLoading: true };
    },
    [types.RESET_PASSWORD_DISABLE_LOADER](state) {
        return { ...state, isResetPasswordLoading: false };
    },
    [types.SEND_FIDBACK_REQUEST_ENABLE_LOADER](state) {
        return { ...state, isSendFidbackRequestLoading: true };
    },
    [types.SEND_FIDBACK_REQUEST_DISABLE_LOADER](state) {
        return { ...state, isSendFidbackRequestLoading: false };
    },
    [types.FETCH_SUBSCRIPTION_PLANS_ENABLE_LOADER](state) {
        return { ...state, isFetchSubscriptionPlansLoading: true };
    },
    [types.FETCH_SUBSCRIPTION_PLANS_DISABLE_LOADER](state) {
        return { ...state, isFetchSubscriptionPlansLoading: false };
    },
    [types.FETCH_USER_SUBSCRIPTION_ENABLE_LOADER](state) {
        return { ...state, isFetchUserSubscriptionLoading: true };
    },
    [types.FETCH_USER_SUBSCRIPTION_DISABLE_LOADER](state) {
        return { ...state, isFetchUserSubscriptionLoading: false };
    },
    [types.AUTOFIDBACKS_FETCH_ENABLE_LOADER](state) {
        return { ...state, isFetchAutoFidbacksLoading: true };
    },
    [types.AUTOFIDBACKS_FETCH_DISABLE_LOADER](state) {
        return { ...state, isFetchAutoFidbacksLoading: false };
    },
    [types.AUTOFIDBACK_FETCH_ENABLE_LOADER](state) {
        return { ...state, isFetchAutoFidbackLoading: true };
    },
    [types.AUTOFIDBACK_FETCH_DISABLE_LOADER](state) {
        return { ...state, isFetchAutoFidbackLoading: false };
    },
    [types.AUTOFIDBACK_NOTE_STORE_ENABLE_LOADER](state) {
        return { ...state, isStoreAutofidbackNoteLoading: true };
    },
    [types.AUTOFIDBACK_NOTE_STORE_DISABLE_LOADER](state) {
        return { ...state, isStoreAutofidbackNoteLoading: false };
    },
    [types.CHECK_USER_SUBSCRIPTION_ENABLE_LOADER](state) {
        return { ...state, isCheckingUserSubscriptionLoading: true };
    },
    [types.CHECK_USER_SUBSCRIPTION_DISABLE_LOADER](state) {
        return { ...state, isCheckingUserSubscriptionLoading: false };
    },
    [types.FETCH_PERSONAL_FIDBACK_LIST_ENABLE_LOADER](state) {
        return { ...state, isFetchPersonalFidbackListLoading: true };
    },
    [types.FETCH_PERSONAL_FIDBACK_LIST_DISABLE_LOADER](state) {
        return { ...state, isFetchPersonalFidbackListLoading: false };
    },
    [types.FETCH_PERSONAL_FIDBACK_MESSAGES_ENABLE_LOADER](state) {
        return { ...state, isFetchingPersonalFidbackMessagesLoading: true };
    },
    [types.FETCH_PERSONAL_FIDBACK_MESSAGES_DISABLE_LOADER](state) {
        return { ...state, isFetchingPersonalFidbackMessagesLoading: false };
    },
    [types.SEND_PERSONAL_FIDBACK_MESSAGE_ENABLE_LOADER](state) {
        return { ...state, isSendingPersonalFidbackMessageLoading: true };
    },
    [types.SEND_PERSONAL_FIDBACK_MESSAGE_DISABLE_LOADER](state) {
        return { ...state, isSendingPersonalFidbackMessageLoading: false };
    },
    [types.OPEN_SUBSCRIPTION_PLAN_ENABLE_LOADER](state) {
        return { ...state, isOpenSubscriptionPlanLoading: true };
    },
    [types.OPEN_SUBSCRIPTION_PLAN_DISABLE_LOADER](state) {
        return { ...state, isOpenSubscriptionPlanLoading: false };
    },
});
