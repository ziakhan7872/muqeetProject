import React, {Component} from 'react';
import {ActivityIndicator, InteractionManager, StyleSheet} from 'react-native';
import PersonalFidbackRequestView from './PersonalFidbackRequestView';
import AppStyles from 'app/config/styles';
import {connect} from 'react-redux';
import * as fidbackRequestActions from 'app/actions/fidbackRequestActions';
import * as subscriptionActions from 'app/actions/subscriptionActions';

class PersonalFidbackRequestContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Νέο αίτημα',
        headerBackTitle: 'Πίσω'
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
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return <PersonalFidbackRequestView {...this.props} />;
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
        isSendFidbackRequestLoading: loadingReducer.isSendFidbackRequestLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendFidbackRequest: request => dispatch(fidbackRequestActions.sendFidbackRequest(request)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalFidbackRequestContainer);
