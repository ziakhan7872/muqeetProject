import React, {Component} from 'react';
import LoginView from './LoginView';
import {connect} from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import * as registerActions from 'app/actions/registerActions';
import {NavigationActions, StackActions} from 'react-navigation';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    const {loadingReducer, loginReducer} = state;
    return {
        isLoginLoading: loadingReducer.isLoginLoading,
        isRegistrationLoading: loadingReducer.isRegistrationLoading,
        isLoggedIn: loginReducer.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd, notificationToken) => dispatch(loginActions.requestLogin(un, pwd, notificationToken)),
        register: user => dispatch(registerActions.registerUser(user)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
