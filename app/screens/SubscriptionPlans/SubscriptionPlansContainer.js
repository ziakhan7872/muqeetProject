import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import SubscriptionPlansView from './SubscriptionPlansView';
import AppStyles from 'app/config/styles';
import { connect } from 'react-redux';
import * as subscriptionActions from 'app/actions/subscriptionActions';
import MenuButton from '../../components/MenuButton';
import PFButton from '../../components/PFButton';
import {openSubscriptionPlanReducer} from '../../reducers/subscriptionReducer';

class SubscriptionPlansContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Συνδρομές',
        headerLeft : <MenuButton navigation={navigation} />,
        headerRight: <PFButton navigation={navigation} />
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
        return <SubscriptionPlansView {...this.props} />;
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
    const {loadingReducer, fetchSubscriptionPlansReducer} = state;
    return {
        isSubscriptionPlansLoading: loadingReducer.isSubscriptionPlansLoading,
        isOpenSubscriptionPlanLoading: loadingReducer.isOpenSubscriptionPlanLoading,
        subscriptionPlans: fetchSubscriptionPlansReducer.subscriptionPlans,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getSubscriptionPlans: () => {dispatch(subscriptionActions.fetchSubscriptionPlans())},
        openSubscriptionPlan: id => {dispatch(subscriptionActions.openSubscriptionPlan(id))},
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubscriptionPlansContainer);
