/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Keyboard} from 'react-native';
import {Divider, Button, CheckBox, Input, Text} from 'react-native-elements';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Hideo} from 'react-native-textinput-effects';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import AppStyles from 'app/config/styles';
import styles from './styles';

class ProfileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: this.props.user.username,
            email: this.props.user.email,
            dob: this.props.user.dob,
            gender: this.props.user.gender,
            chronicIllness: this.props.user.chronicIllness,
            country: (this.props.user.country) ? this.props.user.country : 'Ελλάδα',
            city: this.props.user.city,
            maritalStatus: this.props.user.maritalStatus,
            hasChildren: (this.props.user.hasChildren) ? this.props.user.hasChildren : 'no',
            isEmployed: (this.props.user.isEmployed) ? this.props.user.isEmployed : 'yes',
            fidbackFrequency: (this.props.user.fidbackFrequency) ? this.props.user.fidbackFrequency : '7',
            isEmailValid: true,
            isUsernameValid: true,
            isDobValid: true,
            isGenderValid: true,
            isDateTimePickerVisible: false,
        };
    }

    showDateTimePicker = () => {
        this.setState({isDateTimePickerVisible: true});
    };

    hideDateTimePicker = () => {
        this.setState({isDateTimePickerVisible: false});
    };

    handleDatePicked = date => {
        this.setState({dob: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()});
        this.hideDateTimePicker();
    };

    save() {
        let {
            dob,
            gender,
            chronicIllness,
            country,
            city,
            maritalStatus,
            hasChildren,
            isEmployed,
            fidbackFrequency,
        } = this.state;

        let request = {
            dob,
            gender,
            chronicIllness,
            country,
            city,
            maritalStatus,
            hasChildren,
            isEmployed,
            fidbackFrequency,
        };

        this.props.storeProfile(request);
    }

    getMaximumAllowYear () {
        let maximumAllowedDate = new Date();
        maximumAllowedDate.setFullYear(maximumAllowedDate.getFullYear() - 18);
        return maximumAllowedDate;
    }

    render() {
        const {
            email,
            dob,
            chronicIllness,
            country,
            city,
            maritalStatus,
            hasChildren,
            isEmployed,
            username,
            fidbackFrequency,
            isEmailValid,
            isUsernameValid,
            isDobValid,
            isGenderValid,
            isDateTimePickerVisible,
        } = this.state;

        const maritalStatuses = [
            {label: '-- Επίλεξε --', value: ''},
            {label: 'Ελέυθερος/η', value: 'single'},
            {label: 'Παντρεμένος/η', value: 'married'},
            {label: 'Διαζευγμένος/η', value: 'divorced'},
            {label: 'Χήρος/α', value: 'widowed'},
        ];

        const fidbackFrequencies = [
            {label: 'Κάθε 1 ημέρα', value: '1'},
            {label: 'Κάθε 2 ημέρες', value: '2'},
            {label: 'Κάθε 4 ημέρες', value: '4'},
            {label: 'Κάθε 5 ημέρες', value: '5'},
            {label: 'Κάθε 7 ημέρες', value: '7'},
        ];

        const yesNo = [{label: 'Ναι', value: 'yes'}, {label: 'Όχι', value: 'no'}];

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.formContainer}>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10
                        }}>
                            <Hideo
                                inputStyle={{
                                    color: AppStyles.color.COLOR_DISABLE,
                                    backgroundColor: 'transparent'
                                }}
                                iconBackgroundColor={AppStyles.color.COLOR_WHITE}
                                iconSize={25}
                                iconClass={FontAwesomeIcon}
                                iconName={'envelope-o'}
                                iconColor={AppStyles.color.COLOR_DISABLE}
                                label={'Email'}
                                value={email}
                                editable={false}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                returnKeyType="next"
                                ref={input => (this.emailInput = input)}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                onChangeText={email => this.setState({email})}
                                errorMessage={isEmailValid
                                    ? null
                                    : 'Εισάγετε μια έγκυρη διέυθυνση email'}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10
                        }}>
                            <Hideo
                                inputStyle={{
                                    color: AppStyles.color.COLOR_DISABLE,
                                    backgroundColor: 'transparent'
                                }}
                                iconBackgroundColor={AppStyles.color.COLOR_WHITE}
                                iconSize={25}
                                iconClass={FontAwesomeIcon}
                                iconName={'user'}
                                iconColor={AppStyles.color.COLOR_DISABLE}
                                label={'Όνομα χρήστη'}
                                value={username}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                editable={false}
                                textContentType="username"
                                returnKeyType="next"
                                ref={input => (this.usernameInput = input)}
                                onChangeText={username => this.setState({username})}
                                errorMessage={isUsernameValid
                                    ? null
                                    : 'Το ψευδώνυμο είναι υποχρεωτικό'}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10
                        }}>
                            <Hideo
                                iconBackgroundColor={AppStyles.color.COLOR_WHITE}
                                iconSize={25}
                                iconClass={FontAwesomeIcon}
                                iconName={'calendar'}
                                iconColor={AppStyles.color.COLOR_PRIMARY}
                                label={'Ημερομηνία Γέννησης'}
                                value={dob}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onFocus={() => {
                                    Keyboard.dismiss();
                                    this.setState({isDateTimePickerVisible: true});
                                }}
                                errorMessage={isDobValid
                                    ? null
                                    : 'Η ημερομηνία γέννησης είναι υποχρεωτική'}/>
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            marginBottom: 10
                        }}>
                            <View style={styles.checkboxesContainer}>
                                <CheckBox
                                    style={styles.selectorContainer}
                                    title='Άνδρας'
                                    checked={this.state.gender === 'male'}
                                    checkedColor={AppStyles.color.COLOR_PRIMARY}
                                    onPress={() => this.setState({gender: 'male'})}
                                />
                                <CheckBox
                                    style={styles.selectorContainer}
                                    title='Γυναίκα'
                                    checked={this.state.gender === 'female'}
                                    checkedColor={AppStyles.color.COLOR_PRIMARY}
                                    onPress={() => this.setState({gender: 'female'})}
                                />
                            </View>
                            {isGenderValid === false && (
                                <Text style={styles.errorMessage}>Η επιλογή φύλου είναι υποχρεωτική</Text>
                            )}
                        </View>
                        <Divider style={{
                            backgroundColor: AppStyles.color.COLOR_PRIMARY,
                            marginTop: 5,
                            marginBottom: 15
                        }}/>
                        <View style={{
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10,
                            padding: 17
                        }}>
                            <Text style={{
                                color: AppStyles.color.COLOR_PRIMARY,
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Οικογενειακή κατάσταση</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                items={maritalStatuses}
                                onValueChange={value => {
                                    this.setState({
                                        maritalStatus: value,
                                    });
                                }}
                                value={this.state.maritalStatus}
                            />
                            {!!maritalStatus && maritalStatus !== 'single' && maritalStatus !== '' && (
                                <View>
                                    <Text style={{
                                        color: AppStyles.color.COLOR_PRIMARY,
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                        marginTop: 10
                                    }}>Έχεις παιδιά;</Text>
                                    <RNPickerSelect
                                        placeholder={{}}
                                        items={yesNo}
                                        onValueChange={value => {
                                            this.setState({
                                                hasChildren: value,
                                            });
                                        }}
                                        value={hasChildren}
                                    />
                                </View>
                            )}
                            <Text style={{
                                color: AppStyles.color.COLOR_PRIMARY,
                                fontWeight: 'bold',
                                fontSize: 16,
                                marginTop: 10
                            }}>Εργάζεσαι;</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                items={yesNo}
                                onValueChange={value => {
                                    this.setState({
                                        isEmployed: value,
                                    });
                                }}
                                value={isEmployed}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10,
                            padding: 10
                        }}>
                            <Input
                                label={'Χώρα διαμονής'}
                                labelStyle={{
                                    color: AppStyles.color.COLOR_PRIMARY
                                }}
                                inputContainerStyle= {{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#d9d9d9'
                                }}
                                value={country}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                ref={input => (this.countryInput = input)}
                                onSubmitEditing={() => this.cityInput.focus()}
                                onChangeText={country => this.setState({country})}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10,
                            padding: 10
                        }}>
                            <Input
                                label={'Πόλη'}
                                labelStyle={{
                                    color: AppStyles.color.COLOR_PRIMARY
                                }}
                                inputContainerStyle= {{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#d9d9d9'
                                }}
                                value={city}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                ref={input => (this.cityInput = input)}
                                onSubmitEditing={() => this.chronicIllnessInput.focus()}
                                onChangeText={city => this.setState({city})}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10,
                            padding: 10
                        }}>
                            <Input
                                label={'Αντιμετωπίζεις κάποιο σοβαρό ή χρόνιο πρόβλημα υγείας;'}
                                labelStyle={{
                                    color: AppStyles.color.COLOR_PRIMARY
                                }}
                                inputContainerStyle= {{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#d9d9d9'
                                }}
                                value={chronicIllness}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                ref={input => (this.chronicIllnessInput = input)}
                                onChangeText={chronicIllness => this.setState({chronicIllness})}
                            />
                        </View>
                        <View style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 1,
                            borderColor: '#E4E4E4',
                            marginBottom: 10,
                            padding: 17
                        }}>
                            <Text style={{
                                color: AppStyles.color.COLOR_PRIMARY,
                                fontWeight: 'bold',
                                fontSize: 16
                            }}>Επιλογή ειδοποίησης (Auto Fidback)</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                items={fidbackFrequencies}
                                onValueChange={value => {
                                    this.setState({
                                        fidbackFrequency: value,
                                    });
                                }}
                                value={fidbackFrequency}
                            />
                        </View>
                    </View>
                    <DateTimePicker
                        isVisible={isDateTimePickerVisible}
                        datePickerModeAndroid="spinner"
                        maximumDate={this.getMaximumAllowYear()}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                    <View style={styles.buttonWrapper}>
                        <Button
                            containerStyle={styles.buttonContainer}
                            title="Αποθήκευση"
                            buttonStyle={styles.saveButton}
                            onPress={() => this.save()}
                            raised
                            loading={this.props.isStoreProfileLoading}
                            disabled={this.props.isStoreProfileLoading}
                        />
                        <Button
                            containerStyle={styles.buttonContainer}
                            title="Αποσύνδεση"
                            buttonStyle={styles.previousButton}
                            titleStyle={styles.previousButtonText}
                            onPress={() => this.props.logout()}
                            type="clear"
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

ProfileView.propTypes = {
    storeProfile: PropTypes.func,
    logout: PropTypes.func,
    user: PropTypes.object,
    isStoreProfileLoading: PropTypes.bool
};

export default ProfileView;
