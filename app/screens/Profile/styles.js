import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: 200
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        marginBottom: 15
    },
    divider: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY
    },
    dobContainer: {
        marginTop: 16,
    },
    dobInput: {
        color: AppStyles.color.COLOR_BLACK_TRANSP,
    },
    formContainer: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        padding: 10
    },
    infoAnswerLabel: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 15,
        paddingBottom: 10,
    },
    infoTypeLabel: {
        fontFamily: 'regular',
        fontSize: 15,
        paddingBottom: 10,
        textAlign: 'right',
    },
    profileImage: {
        // alignContent: 'center',
        // height: 250,
        // justifyContent: 'center',
    },
    saveButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        width: 200
    },
    saveTextButton: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    selectorContainer: {
        alignItems: 'center',
        flex: 1,
    },
    statusBar: {
        height: 10,
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    previousButtonText: {
        color: AppStyles.color.COLOR_BLACK_TRANSP,
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default styles;