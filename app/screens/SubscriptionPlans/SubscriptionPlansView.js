import React, {Component} from 'react';
import {ScrollView, ActivityIndicator, Linking} from 'react-native';
import {PricingCard} from 'react-native-elements';
import PropTypes from 'prop-types';
import AppStyles from 'app/config/styles';
import styles from './styles';
import ApiConstants from '../../api/ApiConstants';

class SubscriptionPlansView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getSubscriptionPlans();
    }

    openSubscriptionPlan(id) {
        this.props.openSubscriptionPlan(id);
    }

    render() {
        if (this.props.isSubscriptionPlansLoading) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }

        let subscriptionPlanCards = this.props.subscriptionPlans.map((subscriptionPlan, index) =>
            <PricingCard
                key={index}
                color={subscriptionPlan.color}
                title={subscriptionPlan.title}
                titleStyle={{
                    fontSize: 18
                }}
                price={subscriptionPlan.price + '€'}
                pricingStyle={{ fontSize: 22 }}
                // info={subscriptionPlan.features}
                button={{title: 'Απόκτησε τη συνδρομή'}}
                onButtonPress={() => this.openSubscriptionPlan(subscriptionPlan.id)}
            />
        );

        return (
            <ScrollView style={styles.container}>
                {subscriptionPlanCards}
            </ScrollView>
        );
    }
}

SubscriptionPlansView.propTypes = {
    getSubscriptionPlans: PropTypes.func,
    openSubscriptionPlan: PropTypes.func,
    isSubscriptionPlansLoading: PropTypes.bool,
    subscriptionPlans: PropTypes.array,
};

export default SubscriptionPlansView;
