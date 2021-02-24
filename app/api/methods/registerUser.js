import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function registerUser(user) {
    return Api(
        ApiConstants.REGISTER,
        {
            username: user.username, 
            email: user.email, 
            password: user.password,
            password_confirmation: user.passwordConfirmation,
            dob: user.dob,
            gender: user.gender,
            notification_token: user.notificationToken
        },
        'POST',
        null
    );
}
