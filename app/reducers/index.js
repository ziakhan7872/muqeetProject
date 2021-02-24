/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as articleFetchReducer from './articleFetchReducer';
import * as articlesFetchReducer from './articlesFetchReducer';
import * as fidReducer from './fidReducer';
import * as profileReducer from './profileReducer';
import * as relaxationExercisesFetchReducer from './relaxationExercisesFetchReducer';
import * as lockdownMentalHealthTipsFetchReducer from './lockdownMentalHealthTipsFetchReducer';
import * as resetPasswordReducer from './resetPasswordReducer';
import * as personalFidbackReducer from './personalFidbackReducer';
import * as subscriptionReducer from './subscriptionReducer';
import * as autoFidbackFetchReducer from './autoFidbackFetchReducer';
import * as autoFidbacksFetchReducer from './autoFidbacksFetchReducer';
import * as storeAutoFidbackNoteReducer from './storeAutoFidbackNoteReducer';
import * as fetchPersonalFidbackListReducer from './personalFidbackListReducer';
import * as personalFidbackMessagesReducer from './personalFidbackMessagesReducer';

export default Object.assign(
    loginReducer,
    loadingReducer,
    articleFetchReducer,
    articlesFetchReducer,
    fidReducer,
    profileReducer,
    relaxationExercisesFetchReducer,
    lockdownMentalHealthTipsFetchReducer,
    resetPasswordReducer,
    personalFidbackReducer,
    subscriptionReducer,
    autoFidbackFetchReducer,
    autoFidbacksFetchReducer,
    storeAutoFidbackNoteReducer,
    fetchPersonalFidbackListReducer,
    personalFidbackMessagesReducer,
);