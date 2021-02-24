import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import LockdownMentalHealthTipsView from './LockdownMentalHealthTipsView';
import AppStyles from 'app/config/styles';
import * as blogActions from 'app/actions/blogActions';
import { connect } from 'react-redux';
import MenuButton from 'app/components/MenuButton';

class LockdownMentalHealthTipsContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Lockdown Tips',
        headerLeft : <MenuButton navigation={navigation} />
    });

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
        return <LockdownMentalHealthTipsView {...this.props} />;
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
    const { lockdownMentalHealthTipsFetchReducer, loadingReducer } = state;
    return {
        lockdownMentalHealthTips: lockdownMentalHealthTipsFetchReducer.lockdownMentalHealthTips,
        lockdownMentalHealthTipsNextPageUrl: lockdownMentalHealthTipsFetchReducer.lockdownMentalHealthTipsNextPageUrl,
        isLockdownMentalHealthTipsFetchLoading: loadingReducer.isLockdownMentalHealthTipsFetchLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchLockdownMentalHealthTips: (lockdownMentalHealthTipsNextPageUrl) => dispatch(blogActions.fetchLockdownMentalHealthTips(lockdownMentalHealthTipsNextPageUrl)),
        openArticle: id => dispatch(blogActions.fetchArticle(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LockdownMentalHealthTipsContainer);
