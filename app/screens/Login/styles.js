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
    bgImage: {
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
    categoryText: {
        backgroundColor: AppStyles.color.COLOR_TRANSPARENT,
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 22,
        opacity: 0.54,
        textAlign: 'center'
    },
    checkboxesContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    inline: {
        flexDirection: 'row',
    },
    tosText: {
        color: '#fff',
        marginTop: 16,
        textDecorationLine: 'none',
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
        fontSize: 20,
    },
    errorMessage: {
        color: AppStyles.color.COLOR_LIGHT_PINK,
        fontSize: 11
    },
    formContainer: {
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: SCREEN_WIDTH - 10,
    },
    helpContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 10
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
    loginButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        borderRadius: 2,
        height: 50,
        width: SCREEN_WIDTH - 50,
        marginTop: 20
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginLogo: {
        alignItems: 'center',
    },
    loginSpacing: {
        paddingBottom: 100
    },
    loginText: {
        color: AppStyles.color.COLOR_WHITE,
        fontSize: 16,
        fontWeight: 'bold',
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
    // selected: {
    //     backgroundColor: AppStyles.color.COLOR_WHITE,
    //     borderBottomWidth: 70,
    //     borderColor: 'rgba(255, 255, 255, 0.2)',
    //     borderRadius: 50,
    //     borderRightWidth: 70,
    //     height: 0,
    //     position: 'absolute',
    //     top: -5,
    //     width: 0,
    // },
    selectedCategoryText: {
        fontWeight: 'bold',
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
});

export default styles;