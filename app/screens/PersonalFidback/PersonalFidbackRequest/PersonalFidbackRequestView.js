import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';
import AppStyles from 'app/config/styles';
import styles from './styles';
import {Button, Input} from 'react-native-elements';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

class PersonalFidbackRequestView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            message: '',
            dateRange: '1',
            dateRanges: [
                {label: '1 ημέρα', value: '1'},
                {label: '2 ημέρες', value: '2'},
                {label: '3 ημέρες', value: '3'},
                {label: '4 ημέρες', value: '4'},
                {label: '5 ημέρες', value: '5'},
                {label: '6 ημέρες', value: '6'},
                {label: 'Τελευταία εβδομάδα', value: '7'},
            ]
        };
    }

    sendFidbackRequest() {
        const {title, message, dateRange} = this.state;
        this.props.sendFidbackRequest({title, message, date_range: dateRange});
    }

    render() {
        const {dateRanges} = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.formContainer}>
                        <Text style={{
                            color: AppStyles.color.COLOR_PRIMARY,
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginLeft: 10,
                            marginRight: 10
                        }}>Θέμα αιτήματος
                        </Text>
                        <Input
                            multiline={false}
                            onChangeText={title => this.setState({title})}
                            inputStyle={styles.inputStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                        />
                        <Text style={{
                            color: AppStyles.color.COLOR_PRIMARY,
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginLeft: 10,
                            marginRight: 10
                        }}>Περιγραφή αιτήματος
                        </Text>
                        <Input
                            multiline={true}
                            numberOfLines={3}
                            onChangeText={message => this.setState({message})}
                            inputStyle={styles.inputStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                        />
                        <Text style={{
                            color: AppStyles.color.COLOR_PRIMARY,
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 10
                        }}>Επιλέξτε το χρονικό διάστημα των FiD που θα διαβάσει ο ειδικός</Text>
                        <View style={styles.RNPickerSelect}>
                            <RNPickerSelect
                                placeholder={{}}
                                items={dateRanges}
                                onValueChange={value => {
                                    this.setState({
                                        dateRange: value,
                                    });
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button
                            containerStyle={styles.buttonContainer}
                            title="Αποστολή"
                            buttonStyle={styles.sendButton}
                            titleStyle={styles.sendButtonText}
                            onPress={() => this.sendFidbackRequest()}
                            loading={this.props.isSendFidbackRequestLoading}
                            disabled={this.props.isSendFidbackRequestLoading}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

PersonalFidbackRequestView.propTypes = {
    sendFidbackRequest: PropTypes.func,
    isSendFidbackRequestLoading: PropTypes.bool
};

export default PersonalFidbackRequestView;
