import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import TermsOfUseView from './TermsOfUseView';
import AppStyles from 'app/config/styles';
import { connect } from 'react-redux';

class TermsOfUseContainer extends Component {
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
        return <TermsOfUseView {...this.props} />;
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
)(TermsOfUseContainer);
