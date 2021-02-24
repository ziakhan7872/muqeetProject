/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView
} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AppStyles from '../../config/styles';
// import {Fumi} from 'react-native-textinput-effects';

const BG_IMAGE = require('../../../assets/images/bg_screen1.jpg');

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class PasswordResetView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isEmailValid: true,
            isLoading: false,
        };

        this.resetPassword = this
            .resetPassword
            .bind(this);
    }

    resetPassword() {
        const { email } = this.state;
        this.props.onResetPassword(email);
    }

    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        const { email, isEmailValid, isLoading } = this.state;


        return (
            <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#e5006d00"
                    translucent={true}
                />
                <View style={styles.container}>
                    <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
                        <View>
                            <KeyboardAvoidingView
                                contentContainerStyle={styles.loginContainer}
                                behavior="position">
                                <View>
                                    <Text style={styles.header}>Ανάκτηση κωδικού</Text>
                                </View>
                                <View style={styles.formContainer}>
                                    <Input
                                        containerStyle={styles.inputWidth}
                                        inputContainerStyle={styles.inputContainerStyle}
                                        inputStyle={styles.inputStyle}
                                        placeholder={'Διεύθυνση email'}
                                        placeholderTextColor = "rgba(255, 255, 255, 0.5)"
                                        leftIcon={{ type: 'font-awesome', name: 'envelope-o', color: AppStyles.color.COLOR_WHITE }}
                                        iconColor={AppStyles.color.COLOR_WHITE}
                                        iconSize={20}
                                        iconWidth={40}
                                        leftIconContainerStyle={styles.leftIconContainerStyle}
                                        value={email}
                                        keyboardAppearance="light"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        keyboardType="email-address"
                                        textContentType="emailAddress"
                                        returnKeyType="next"
                                        ref={input => (this.emailInput = input)}
                                        onChangeText={email => this.setState({email})}
                                        errorMessage={isEmailValid
                                            ? null
                                            : 'Εισάγετε μια έγκυρη διέυθυνση email'}/>
                                    <Button
                                        buttonStyle={styles.loginButton}
                                        containerStyle={{
                                            flex: 0
                                        }}
                                        activeOpacity={0.8}
                                        title={'Υποβολή για κωδικό'}
                                        onPress={this.resetPassword}
                                        titleStyle={styles.loginTextButton}
                                        loading={this.props.isResetPasswordLoading}
                                        disabled={this.props.isResetPasswordLoading} />
                                    <Button
                                        buttonStyle={styles.secondaryButton}
                                        type="clear"
                                        containerStyle={{
                                            marginTop: 16,
                                            flex: 0
                                        }}
                                        activeOpacity={0.8}
                                        icon={
                                            <Icon
                                                type='font-awesome'
                                                name="long-arrow-left"
                                                size={15}
                                                color={AppStyles.color.COLOR_LIGHT_PINK} 
                                            />
                                        }
                                        title={'Πίσω'}
                                        onPress={() => this.props.navigation.goBack()}
                                        titleStyle={styles.secondaryButtonText}
                                        disabled={isLoading} />
                                </View>
                            </KeyboardAvoidingView>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
}

PasswordResetView.propTypes = {
    navigation: PropTypes.object,
    onResetPassword: PropTypes.func,
    isResetPasswordLoading: PropTypes.bool
};

export default PasswordResetView;
