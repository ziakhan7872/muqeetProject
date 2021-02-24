/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoggedIn: false,
    username: '',
    token: '',
    email: '',
    gender: '',
    dob: '',
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            email: action.email,
        };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            isLoggedIn: true,
            token: action.response.token,
            username: action.response.username,
            email: action.response.email,
            gender: action.response.gender,
            dob: action.response.dob,
            notificationToken: action.response.notification_token,
            maritalStatus: action.response.marital_status,
            hasChildren: action.response.children,
            isEmployed: action.response.employment_status,
            country: action.response.country,
            city: action.response.city,
            chronicIllness: action.response.chronic_illness,
            fidbackFrequency: action.response.fidback_frequency,
            hasPersonalFidbackProfile: action.response.has_personal_fidback_profile,
        };
    },
    [types.USER_UPDATE](state, action) {
        return {
            ...state,
            ...action.profile
        };
    },
    [types.LOGOUT_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.LOGOUT_RESPONSE](state, action) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
    [types.REGISTRATION_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.REGISTRATION_RESPONSE](state, action) {
        return {
            ...state,
            isLoggedIn: true,
            token: action.response.token,
            username: action.response.username,
            email: action.response.email,
            gender: action.response.gender,
            dob: action.response.dob,
            maritalStatus: action.response.marital_status,
            hasChildren: action.response.children,
            isEmployed: action.response.employment_status,
            country: action.response.country,
            city: action.response.city,
            chronicIllness: action.response.chronic_illness,
            fidbackFrequency: action.response.fidback_frequency,
            hasPersonalFidbackProfile: action.response.has_personal_fidback_profile,
        };
    },
    [types.PERSONAL_FIDBACK_PROFILE_STORE_RESPONSE](state, action) {
        return {
            ...state,
            hasPersonalFidbackProfile: true,
        };
    },
});