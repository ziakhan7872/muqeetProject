/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    ImageBackground,
    LayoutAnimation,
    UIManager,
    SafeAreaView,
    Platform,
    Alert,
    StatusBar,
    Dimensions
} from 'react-native';
import { Button, CheckBox, Input, Icon } from 'react-native-elements';
import styles from './styles';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import AppStyles from 'app/config/styles';
import NotifService from 'app/services/NotifService';
import TermsOfUse from 'app/services/TermsOfUseText';
import { NavigationActions, StackActions } from 'react-navigation';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const BG_IMAGE = require('../../../assets/images/bg_screen1.jpg');
const LOGO = require('../../../assets/images/ic_launcher.png');
const SCREEN_WIDTH = Dimensions.get('window').width;

const TabSelector = ({ selected }) => {
    return (
        <View style={styles.selectorContainer}>
            <View style={selected && styles.selected} />
        </View>
    );
};

TabSelector.propTypes = {
    selected: PropTypes.bool.isRequired
};

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            dob: '',
            gender: null,
            password: '',
            notificationToken: '',
            passwordConfirmation: '',
            selectedCategory: 0,
            isEmailValid: true,
            isUsernameValid: true,
            isPasswordValid: true,
            isPasswordConfirmationValid: true,
            isDobValid: true,
            isDateTimePickerVisible: false,
            isTosAccepted: false,
            isTosAcceptedValid: true
        };

        this.selectCategory = this.selectCategory.bind(this);
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.onRegister = this.onRegister.bind(this);
        this.onNotif = this.onNotif.bind(this);
        this.showDateTimePicker = this.showDateTimePicker.bind(this);
        this.hideDateTimePicker = this.hideDateTimePicker.bind(this);
    }

    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    key: null,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Drawer' })
                    ]
                })
            );
        } else {
            new NotifService(this.onRegister, this.onNotif);
        }
    }

    onRegister(token) {
        this.setState({ notificationToken: token.token });
    }

    onNotif(notification) {
        if (this.props.isLoggedIn) {
            if (notification.target === 'PersonalFidbackList') {
                this.props.navigation.navigate('PersonalFidbackList');
            } else if (notification.target === 'AutoFidbackList') {
                this.props.navigation.navigate('AutoFidbackList');
            }
        }
        if (Platform.OS === 'ios') {
            PushNotificationIOS.getApplicationIconBadgeNumber(num => {
                if (num >= 1) {
                    PushNotificationIOS.setApplicationIconBadgeNumber(0);
                }
            });
            notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.configureNext({
            duration: 300,
            create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity
            },
            update: {
                type: LayoutAnimation.Types.easeInEaseOut
            }
        });
    }

    _resetErrors = () => {
        this.setState({
            isEmailValid: true,
            isUsernameValid: true,
            isLastNameValid: true,
            isPasswordValid: true,
            isPasswordConfirmationValid: true,
            isDobValid: true,
            isTosAccepted: false,
            isTosAcceptedValid: true
        });
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({
            dob:
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear()
        });
        this.hideDateTimePicker();
    };

    selectCategory(selectedCategory) {
        this._resetErrors();
        this.setState({ selectedCategory });
    }

    login() {
        const { email, password, notificationToken } = this.state;
        this.setState(
            {
                isEmailValid: this.validateEmail(this.state.email),
                isPasswordValid: this.state.password.trim() !== ''
            },
            () => {
                if (this.state.isEmailValid && this.state.isPasswordValid) {
                    this.props.onLogin(email, password, notificationToken);
                }
            }
        );
    }

    signUp() {
        if (!this.state.isTosAccepted) {
            this.setState({ isTosAcceptedValid: false });
        } else {
            this.setState(
                {
                    isTosAcceptedValid: true,
                    isUsernameValid: this.state.username.trim() !== '',
                    isEmailValid: this.validateEmail(this.state.email),
                    isPasswordValid:
                        this.state.password.length >= 6 &&
                        this.state.password.trim() !== '',
                    isPasswordConfirmationValid:
                        this.state.password === this.state.passwordConfirmation,
                    // isDobValid: this.state.dob.trim() !== ''
                },
                async () => {
                    if (
                        this.state.isUsernameValid &&
                        this.state.isEmailValid &&
                        this.state.isPasswordValid &&
                        this.state.isPasswordConfirmationValid &&
                        this.state.isDobValid
                    ) {
                        const registrationInfo = {
                            notificationToken: this.state.notificationToken,
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password,
                            passwordConfirmation: this.state
                                .passwordConfirmation,
                            dob: this.state.dob,
                            gender: this.state.gender
                        };

                        this.props.register(registrationInfo);
                    }
                }
            );
        }
    }

    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    getMaximumAllowYear() {
        let maximumAllowedDate = new Date();
        maximumAllowedDate.setFullYear(maximumAllowedDate.getFullYear() - 16);
        return maximumAllowedDate;
    }

    openTermsAndConditionsModal() {
        Alert.alert(
            'Όροι Χρήσης',
            TermsOfUse,
            [
                {
                    text: 'Ακυρο',
                    onPress: () => this.setState({ isTosAccepted: false }),
                    style: 'cancel'
                },
                {
                    text: 'Αποδοχη Ορων Χρησης',
                    onPress: () => this.setState({ isTosAccepted: true })
                }
            ],
            { cancelable: false }
        );
    }

    render() {
        const {
            selectedCategory,
            isEmailValid,
            isUsernameValid,
            isPasswordValid,
            isPasswordConfirmationValid,
            isDobValid,
            username,
            email,
            dob,
            password,
            passwordConfirmation,
            gender,
            isTosAccepted,
            isTosAcceptedValid
        } = this.state;
        const isLoginPage = selectedCategory === 0;
        const isSignUpPage = selectedCategory === 1;
        return (
            <SafeAreaView>
                <StatusBar
                    hidden
                    barStyle="light-content"
                    backgroundColor={AppStyles.color.COLOR_TRANSPARENT}
                    translucent={true}
                />
                <ScrollView
                    decelerationRate={0.993}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <ImageBackground
                            source={BG_IMAGE}
                            style={styles.bgImage}
                        >
                            <View style={styles.loginSpacing}>
                                <View style={styles.loginContainer}>
                                    <View style={styles.titleContainer}>
                                        <View
                                            style={{
                                                flexDirection: 'row'
                                            }}
                                        >
                                            <Image
                                                style={styles.loginLogo}
                                                source={LOGO}
                                            />
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                    >
                                        <Button
                                            disabled={
                                                this.props.isLoginLoading ||
                                                this.props.isRegistrationLoading
                                            }
                                            type="clear"
                                            activeOpacity={0.7}
                                            onPress={() =>
                                                this.selectCategory(0)
                                            }
                                            containerStyle={{
                                                flex: 1
                                            }}
                                            titleStyle={[
                                                styles.categoryText,
                                                isLoginPage &&
                                                    styles.selectedCategoryText
                                            ]}
                                            title={'Σύνδεση'}
                                        />
                                        <Button
                                            disabled={
                                                this.props.isLoginLoading ||
                                                this.props.isRegistrationLoading
                                            }
                                            type="clear"
                                            activeOpacity={0.7}
                                            onPress={() =>
                                                this.selectCategory(1)
                                            }
                                            containerStyle={{
                                                flex: 1
                                            }}
                                            titleStyle={[
                                                styles.categoryText,
                                                isSignUpPage &&
                                                    styles.selectedCategoryText
                                            ]}
                                            title={'Εγγραφή'}
                                        />
                                    </View>
                                    <View style={styles.rowSelector}>
                                        <TabSelector selected={isLoginPage} />
                                        <TabSelector selected={isSignUpPage} />
                                    </View>
                                    <View style={styles.formContainer}>
                                        <Input
                                            containerStyle={styles.inputWidth}
                                            inputContainerStyle={
                                                styles.inputContainerStyle
                                            }
                                            inputStyle={styles.inputStyle}
                                            placeholder={'Διεύθυνση email'}
                                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                            leftIcon={{
                                                type: 'font-awesome',
                                                name: 'envelope-o',
                                                color:
                                                    AppStyles.color.COLOR_WHITE
                                            }}
                                            leftIconContainerStyle={
                                                styles.leftIconContainerStyle
                                            }
                                            value={email}
                                            keyboardAppearance="light"
                                            autoFocus={false}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            keyboardType="email-address"
                                            textContentType="emailAddress"
                                            returnKeyType="next"
                                            ref={input =>
                                                (this.emailInput = input)
                                            }
                                            onSubmitEditing={() =>
                                                this.passwordInput.focus()
                                            }
                                            onChangeText={email =>
                                                this.setState({ email })
                                            }
                                            errorMessage={
                                                isEmailValid
                                                    ? null
                                                    : 'Εισάγετε μια έγκυρη διέυθυνση email'
                                            }
                                        />
                                        <Input
                                            containerStyle={styles.inputWidth}
                                            inputContainerStyle={
                                                styles.inputContainerStyle
                                            }
                                            inputStyle={styles.inputStyle}
                                            placeholder={'Κωδικός πρόσβασης'}
                                            placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                            leftIcon={{
                                                type: 'font-awesome',
                                                name: 'lock',
                                                color:
                                                    AppStyles.color.COLOR_WHITE
                                            }}
                                            leftIconContainerStyle={
                                                styles.leftIconContainerStyle
                                            }
                                            value={password}
                                            keyboardAppearance="light"
                                            autoFocus={false}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            secureTextEntry={true}
                                            returnKeyType={
                                                isSignUpPage ? 'next' : 'done'
                                            }
                                            blurOnSubmit={true}
                                            ref={input =>
                                                (this.passwordInput = input)
                                            }
                                            onSubmitEditing={() =>
                                                isSignUpPage
                                                    ? this.passwordConfirmationInput.focus()
                                                    : this.login()
                                            }
                                            onChangeText={password =>
                                                this.setState({ password })
                                            }
                                            errorMessage={
                                                isPasswordValid
                                                    ? null
                                                    : 'Εισάγετε τουλάχιστον 6 χαρακτήρες'
                                            }
                                        />
                                        {isSignUpPage && (
                                            <Input
                                                containerStyle={
                                                    styles.inputWidth
                                                }
                                                inputContainerStyle={
                                                    styles.inputContainerStyle
                                                }
                                                inputStyle={styles.inputStyle}
                                                leftIcon={{
                                                    type: 'font-awesome',
                                                    name: 'lock',
                                                    color:
                                                        AppStyles.color
                                                            .COLOR_WHITE
                                                }}
                                                leftIconContainerStyle={
                                                    styles.leftIconContainerStyle
                                                }
                                                value={passwordConfirmation}
                                                placeholder={
                                                    'Επιβεβαίωση κωδικού'
                                                }
                                                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                                keyboardAppearance="light"
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                secureTextEntry={true}
                                                returnKeyType={
                                                    isSignUpPage
                                                        ? 'next'
                                                        : 'done'
                                                }
                                                blurOnSubmit={true}
                                                ref={input =>
                                                    (this.passwordConfirmationInput = input)
                                                }
                                                onSubmitEditing={() =>
                                                    isSignUpPage
                                                        ? this.passwordConfirmationInput.focus()
                                                        : this.login()
                                                }
                                                onChangeText={passwordConfirmation =>
                                                    this.setState({
                                                        passwordConfirmation
                                                    })
                                                }
                                                errorMessage={
                                                    isPasswordConfirmationValid
                                                        ? null
                                                        : 'Η επιβεβαίωση κωδικού δεν ταιριάζει με τον κωδικό πρόσβασης'
                                                }
                                            />
                                        )}
                                        {isSignUpPage && (
                                            <Input
                                                containerStyle={
                                                    styles.inputWidth
                                                }
                                                inputContainerStyle={
                                                    styles.inputContainerStyle
                                                }
                                                inputStyle={styles.inputStyle}
                                                value={username}
                                                placeholder={'Όνομα χρήστη'}
                                                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                                                leftIcon={{
                                                    type: 'font-awesome',
                                                    name: 'user',
                                                    color:
                                                        AppStyles.color
                                                            .COLOR_WHITE
                                                }}
                                                leftIconContainerStyle={
                                                    styles.leftIconContainerStyle
                                                }
                                                labelStyle={styles.labelInput}
                                                keyboardAppearance="light"
                                                autoFocus={false}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                returnKeyType="next"
                                                textContentType="username"
                                                blurOnSubmit={true}
                                                ref={input =>
                                                    (this.usernameInput = input)
                                                }
                                                onChangeText={username =>
                                                    this.setState({ username })
                                                }
                                                errorMessage={
                                                    isUsernameValid
                                                        ? null
                                                        : 'Το ψευδώνυμο είναι υποχρεωτικό'
                                                }
                                            />
                                        )}
                                        {isSignUpPage && (
                                            <TouchableWithoutFeedback
                                                style={{
                                                    backgroundColor:
                                                        'rgba(255, 255, 255, 0.1)',
                                                    marginBottom: 10,
                                                    padding: 6,
                                                    borderBottomWidth: 2,
                                                    borderBottomColor: '#fff',
                                                    width: SCREEN_WIDTH - 50,
                                                    paddingLeft: 23,
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'flex-start'
                                                }}
                                                onPress={() =>
                                                    this.setState({
                                                        isDateTimePickerVisible: true
                                                    })
                                                }
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        flexWrap: 'wrap'
                                                    }}
                                                >
                                                    <Icon
                                                        style={{
                                                            paddingLeft: 15
                                                        }}
                                                        name="calendar"
                                                        type="font-awesome"
                                                        color={
                                                            AppStyles.color
                                                                .COLOR_WHITE
                                                        }
                                                    />
                                                    <Text
                                                        style={{
                                                            color: dob
                                                                ? AppStyles
                                                                    .color
                                                                    .COLOR_WHITE
                                                                : 'rgba(255, 255, 255, 0.5)',
                                                            fontSize: 18,
                                                            marginLeft: 12,
                                                            marginBottom: 5
                                                        }}
                                                    >
                                                        {dob
                                                            ? dob
                                                            : 'Ημερομηνία γέννησης'}
                                                    </Text>
                                                    {!isDobValid && (
                                                        <Text
                                                            style={{
                                                                color:
                                                                    'rgba(255, 0, 0 , 0.85)',
                                                                marginTop: 10,
                                                                marginLeft: -5,
                                                                fontSize: 11
                                                            }}
                                                        >
                                                            Η ημερομηνία
                                                            γέννησης είναι
                                                            υποχρεωτική
                                                        </Text>
                                                    )}
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )}
                                        {isSignUpPage && (
                                            <View>
                                                <View
                                                    style={
                                                        styles.checkboxesContainer
                                                    }
                                                >
                                                    <CheckBox
                                                        containerStyle={{
                                                            backgroundColor:
                                                                'rgba(255, 255, 255, 0.1)',
                                                            borderWidth: 0
                                                        }}
                                                        style={
                                                            styles.selectorContainer
                                                        }
                                                        title="Άνδρας"
                                                        textStyle={
                                                            styles.labelInput
                                                        }
                                                        checked={
                                                            gender === 'male'
                                                        }
                                                        checkedColor={
                                                            AppStyles.color
                                                                .COLOR_PRIMARY
                                                        }
                                                        onPress={() =>
                                                            this.setState({
                                                                gender: 'male'
                                                            })
                                                        }
                                                    />
                                                    <CheckBox
                                                        containerStyle={{
                                                            backgroundColor:
                                                                'rgba(255, 255, 255, 0.1)',
                                                            borderWidth: 0
                                                        }}
                                                        style={
                                                            styles.selectorContainer
                                                        }
                                                        title="Γυναίκα"
                                                        textStyle={
                                                            styles.labelInput
                                                        }
                                                        checked={
                                                            gender === 'female'
                                                        }
                                                        checkedColor={
                                                            AppStyles.color
                                                                .COLOR_PRIMARY
                                                        }
                                                        onPress={() =>
                                                            this.setState({
                                                                gender: 'female'
                                                            })
                                                        }
                                                    />
                                                </View>
                                            </View>
                                        )}
                                        {isSignUpPage && (
                                            <View>
                                                <View style={styles.inline}>
                                                    <CheckBox
                                                        containerStyle={{
                                                            marginLeft: 0,
                                                            paddingLeft: 0
                                                        }}
                                                        center
                                                        onPress={() =>
                                                            this.openTermsAndConditionsModal()
                                                        }
                                                        checked={isTosAccepted}
                                                    />
                                                    <Text
                                                        style={styles.tosText}
                                                        onPress={() =>
                                                            this.openTermsAndConditionsModal()
                                                        }
                                                    >
                                                        Αποδέχομαι τους όρους
                                                        χρήσης
                                                    </Text>
                                                </View>
                                                {isTosAcceptedValid ===
                                                    false && (
                                                    <View
                                                        style={{
                                                            backgroundColor:
                                                                'rgba(255, 255, 255, 0.1)',
                                                            padding: 10
                                                        }}
                                                    >
                                                        <Text
                                                            style={
                                                                styles.errorMessage
                                                            }
                                                        >
                                                            Η αποδοχή των όρων
                                                            χρήσης είναι
                                                            υποχρεωτική
                                                        </Text>
                                                    </View>
                                                )}
                                            </View>
                                        )}
                                        <DateTimePicker
                                            isVisible={
                                                this.state
                                                    .isDateTimePickerVisible
                                            }
                                            datePickerModeAndroid="spinner"
                                            maximumDate={this.getMaximumAllowYear()}
                                            onConfirm={this.handleDatePicked}
                                            onCancel={this.hideDateTimePicker}
                                        />
                                        <Button
                                            buttonStyle={styles.loginButton}
                                            containerStyle={{
                                                flex: 0
                                            }}
                                            activeOpacity={0.8}
                                            title={
                                                isLoginPage
                                                    ? 'Σύνδεση'
                                                    : 'Εγγραφή'
                                            }
                                            onPress={
                                                isLoginPage
                                                    ? this.login
                                                    : this.signUp
                                            }
                                            titleStyle={styles.loginTextButton}
                                            loading={
                                                this.props.isLoginLoading ||
                                                this.props.isRegistrationLoading
                                            }
                                            disabled={
                                                this.props.isLoginLoading ||
                                                this.props.isRegistrationLoading
                                            }
                                        />
                                    </View>
                                    {selectedCategory === 0 && (
                                        <View style={styles.helpContainer}>
                                            <Button
                                                title={
                                                    'Ξέχασα τον κωδικό πρόσβασης'
                                                }
                                                titleStyle={{
                                                    fontSize: 13,
                                                    color:
                                                        AppStyles.color
                                                            .COLOR_LIGHT_PINK
                                                }}
                                                buttonStyle={{
                                                    backgroundColor:
                                                        AppStyles.color
                                                            .COLOR_TRANSPARENT
                                                }}
                                                underlayColor={
                                                    AppStyles.color
                                                        .COLOR_TRANSPARENT
                                                }
                                                onPress={() =>
                                                    this.props.navigation.navigate(
                                                        'PasswordReset'
                                                    )
                                                }
                                            />
                                        </View>
                                    )}
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func,
    register: PropTypes.func,
    navigation: PropTypes.object,
    isLoginLoading: PropTypes.bool,
    isRegistrationLoading: PropTypes.bool,
    isLoggedIn: PropTypes.bool
};

export default LoginView;
