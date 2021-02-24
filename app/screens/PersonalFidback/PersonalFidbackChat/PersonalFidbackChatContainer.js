import React, {Component} from 'react';
import {ActivityIndicator, InteractionManager, StyleSheet} from 'react-native';
import PersonalFidbackChatView from './PersonalFidbackChatView';
import AppStyles from 'app/config/styles';
import {connect} from 'react-redux';
import * as personalFidbackMessagesActions from 'app/actions/personalFidbackMessagesActions';

class PersonalFidbackChatContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Συζήτηση',
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
        return <PersonalFidbackChatView {...this.props} />;
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
    const {loadingReducer, loginReducer, personalFidbackMessagesReducer} = state;
    return {
        email: loginReducer.email,
        isFetchingPersonalFidbackMessagesLoading: loadingReducer.isFetchingPersonalFidbackMessagesLoading,
        isSendingPersonalFidbackMessageLoading: loadingReducer.isSendingPersonalFidbackMessageLoading,
        personalFidbackMessages: personalFidbackMessagesReducer.personalFidbackMessages,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: message => dispatch(personalFidbackMessagesActions.sendPersonalFidbackMessage(message)),
        fetchPersonalFidbackMessages: () => dispatch(personalFidbackMessagesActions.fetchPersonalFidbackMessages())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalFidbackChatContainer);
