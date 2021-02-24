import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import PrivacyPolicyView from './PrivacyPolicyView';
import AppStyles from 'app/config/styles';
import { connect } from 'react-redux';

class PrivacyPolicyContainer extends Component {
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
        return <PrivacyPolicyView {...this.props} />;
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacyPolicyContainer);
