import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Button, Badge} from 'react-native-elements';
import * as personalFidbackSubscriptionActions from '../actions/personalFidbackSubscriptionActions';
import {connect} from 'react-redux';
import AppStyles from 'app/config/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class PersonalFidbackRequestButton extends Component {
    constructor(props) {
        super(props);
    }

    redirectToPersonalFidbackRequest() {
        this.props.checkUserSubscription();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginRight: 15,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button
                    titleStyle={{color: AppStyles.color.COLOR_WHITE, paddingLeft: 5}}
                    buttonStyle={{backgroundColor: '#337578'}}
                    icon={
                        <Icon
                          name="plus"
                          size={15}
                          color="white"
                        />
                    }
                    title="Νέο"
                    loading={this.props.isCheckingUserSubscriptionLoading}
                    disabled={this.props.isCheckingUserSubscriptionLoading}
                    onPress={() => this.redirectToPersonalFidbackRequest()}/>
                {this.props.remainingRequests !== null && (
                    <Badge
                        value={this.props.remainingRequests}
                        status={this.props.remainingRequests > 0 ? 'primary' : 'error'}
                        containerStyle={{position: 'absolute', top: -4, right: -4}}
                    />
                )}
            </View>
        );
    }
}

PersonalFidbackRequestButton.propTypes = {
    checkUserSubscription: PropTypes.func,
    isCheckingUserSubscriptionLoading: PropTypes.bool,
    remainingRequests: PropTypes.number,
};

function mapStateToProps(state) {
    const {loadingReducer, personalFidbackListReducer} = state;
    return {
        isCheckingUserSubscriptionLoading: loadingReducer.isFetchingUserSubscriptionLoading,
        remainingRequests: personalFidbackListReducer.remainingRequests,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkUserSubscription: () => dispatch(personalFidbackSubscriptionActions.checkUserSubscription()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalFidbackRequestButton);
