import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {GiftedChat} from 'react-native-gifted-chat';

class PersonalFidbackChatView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: this.props.personalFidbackMessages,
            email: this.props.email
        };
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }), () => {
            this.props.sendMessage({
                text: messages[0].text,
                personalFidbackId: this.props.navigation.getParam('personalFidbackId')
            });
        });
    }

    render() {
        const {email, messages} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <GiftedChat
                    messages={messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: email,
                    }}
                    alignTop={false}
                    initialText={''}
                    isAnimated={true}
                    alwaysShowSend={true}
                    inverted={true}
                    renderInputToolbar={() => null}
                />
            </SafeAreaView>
        );
    }
}

PersonalFidbackChatView.propTypes = {
    sendMessage: PropTypes.func,
    fetchPersonalFidbackMessages: PropTypes.func,
    isSendingPersonalFidbackMessageLoading: PropTypes.bool,
    isFetchingPersonalFidbackMessagesLoading: PropTypes.bool,
    email: PropTypes.string,
    personalFidbackMessages: PropTypes.array,
};

export default PersonalFidbackChatView;
