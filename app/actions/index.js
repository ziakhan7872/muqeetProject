// export action creators
import * as loginActions from './loginActions';
import * as blogActions from './blogActions';
import * as registrationActions from './registerActions';
import * as navigationActions from './navigationActions';
import * as fidActions from './fidActions';
import * as profileActions from './profileActions';
import * as passwordActions from './passwordActions';
import * as fidbackRequestActions from './fidbackRequestActions';
import * as autoFidbackActions from './autoFidbackActions';
import * as pushNotificationActions from './pushNotificationActions';
import * as personalFidbackProfileActions from './personalFidbackProfileActions';
import * as personalFidbackSubscriptionActions from './personalFidbackSubscriptionActions';
import * as personalFidbackListActions from './personalFidbackListActions';
import * as personalFidbackMessagesActions from './personalFidbackMessagesActions';

export const ActionCreators = Object.assign(
    {},
    loginActions,
    blogActions,
    registrationActions,
    navigationActions,
    fidActions,
    profileActions,
    passwordActions,
    fidbackRequestActions,
    autoFidbackActions,
    pushNotificationActions,
    personalFidbackProfileActions,
    personalFidbackSubscriptionActions,
    personalFidbackListActions,
    personalFidbackMessagesActions,
);
