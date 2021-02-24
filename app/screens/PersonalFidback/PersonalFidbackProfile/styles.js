import {
    Dimensions,
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';
import AppStyles from 'app/config/styles';

const SCREEN_WIDTH = Dimensions
    .get('window')
    .width;

const styles = StyleSheet.create({
    welcomeBgImage: {
        alignItems: 'center',
        flex: 1,
        ...Platform.select({
            ios: {
                height: Dimensions.get('screen').height,
            },
            android: {
                height: Dimensions.get('window').height + StatusBar.currentHeight * 2,
            },
        }),
        justifyContent: 'center',
        left: 0,
        top: 0,
        width: SCREEN_WIDTH,
    },
    welcomeContainer: {
        padding: 15
    }, 
    // container: {
    //     margin: 10
    // },
    formContainer: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        marginBottom: 10,
        padding: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: AppStyles.color.COLOR_WHITE
    },
    body: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    question: {
        margin: 10,
        color: AppStyles.color.COLOR_PRIMARY,
        fontWeight: 'bold',
        // borderBottomWidth: 1,
        // borderBottomColor: AppStyles.color.COLOR_PRIMARY,
        // paddingBottom: 5
    },
    note: {
        margin: 10,
        fontStyle: 'italic',
        borderWidth: 1,
        borderColor: AppStyles.color.COLOR_PRIMARY,
        padding: 5
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
    buttonContainer: {
        marginBottom: 15
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
    sendButtonPrevious: {
        backgroundColor: 'transparent',
        width: 200
    },
    sendButtonPreviousText: {
        color: AppStyles.color.COLOR_PRIMARY,
        fontSize: 14,
        fontWeight: 'bold'
    },

    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;