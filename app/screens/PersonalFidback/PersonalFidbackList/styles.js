import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    container: {
        margin: 0
    },
    formContainer: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        marginBottom: 10,
        padding: 10
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#E4E4E4',
        padding: 10
    },
    inputStyleContainer: {},
    inputContainerStyle: {
        borderBottomWidth: 0,
        marginTop: 10
    },
    RNPickerSelect: {
        borderWidth: 1,
        borderColor: '#E4E4E4',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10
    },
    sendButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        width: 200
    },
    sendButtonText: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;