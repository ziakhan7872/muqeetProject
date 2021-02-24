import {
    Dimensions,
    StyleSheet,
    StatusBar
} from 'react-native';
import AppStyles from 'app/config/styles';

const SCREEN_WIDTH = Dimensions
    .get('window')
    .width;
const SCREEN_HEIGHT = Dimensions
    .get('window')
    .height;

const styles = StyleSheet.create({
    bgImage: {
        alignItems: 'center',
        flex: 1,
        height: SCREEN_HEIGHT + StatusBar.currentHeight * 2,
        justifyContent: 'center',
        left: 0,
        top: 0,
        width: SCREEN_WIDTH,
    },
    categoryText: {
        backgroundColor: AppStyles.color.COLOR_TRANSPARENT,
        color: AppStyles.color.COLOR_WHITE,
        fontFamily: 'light',
        fontSize: 24,
        opacity: 0.54,
        textAlign: 'center'
    },
    checkboxesContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    container: {
        flex: 1
    },
    dobContainer: {
        flexDirection: 'row',
        fontSize: 25,
        justifyContent: 'flex-start',
        marginTop: 16,
    },
    dobInput: {
        fontSize: 20
    },
    formContainer: {
        alignItems: 'center',
        paddingBottom: 32,
        paddingTop: 32,
        width: SCREEN_WIDTH - 30,
    },
    header: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 25,
        paddingBottom: 20
    },
    helpContainer: {
        alignItems: 'center',
        height: 64,
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        borderRadius: 2,
        height: 50,
        width: SCREEN_WIDTH - 50,
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginLogo: {
        alignItems: 'center',
    },
    loginText: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginInput: {
        width: SCREEN_WIDTH - 50,
        // borderWidth: 1,
        // borderColor: '#E4E4E4',
        // borderRadius: 5
    },
    loginTextButton: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    rowSelector: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 20,
    },
    secondaryButtonText: {
        color: AppStyles.color.COLOR_LIGHT_PINK,
        paddingLeft: 10
    },
    selected: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        borderBottomWidth: 70,
        borderColor: AppStyles.color.COLOR_WHITE,
        borderRadius: 50,
        borderRightWidth: 70,
        height: 0,
        position: 'absolute',
        top: -5,
        width: 0,
    },
    selectedCategoryText: {
        opacity: 1
    },
    selectorContainer: {
        alignItems: 'center',
        flex: 1,
    },
    titleContainer: {
        backgroundColor: AppStyles.color.COLOR_TRANSPARENT,
        height: 150,
        justifyContent: 'center'
    },
    titleText: {
        color: AppStyles.color.COLOR_WHITE,
        fontFamily: 'regular',
        fontSize: 30,
    },
    inputWidth: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 10,
        width: SCREEN_WIDTH - 50,
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
    },
    inputStyle: {
        color: AppStyles.color.COLOR_WHITE
    },
    inputContainerStyle: {
        borderBottomWidth: 0
    },
    leftIconContainerStyle: {
        paddingRight: 10
    },
    labelInput: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 14,
        fontWeight: '300',
        paddingLeft: 10
    },
    labelInput: {
        color: '#b1b1b1',
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: '300'
    }
});

export default styles;