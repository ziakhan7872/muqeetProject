import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import PasswordResetView from './PasswordResetView';
import AppStyles from 'app/config/styles';
import { connect } from 'react-redux';
import * as passwordActions from '../../actions/passwordActions';

class PasswordResetContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                isReady: true
            });
        });
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large" color={AppStyles.color.COLOR_PRIMARY} />;
        }
        return <PasswordResetView {...this.props} />;
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

function mapStateToProps(state) {
    const {loadingReducer} = state;
    return {
        inResetPasswordLoading: loadingReducer.isResetPasswordLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onResetPassword: email => dispatch(passwordActions.resetPassword(email)),
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordResetContainer);
