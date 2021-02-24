import {
    PixelRatio,
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    avatar: {
        borderRadius: 75,
        height: 150,
        width: 150,
    },
    avatarContainer: {
        alignItems: 'center',
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        width: 200
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        marginTop: 20
    },
    header: {
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 18,
    },
    imageContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    inline: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputContainerStyle: {
        borderBottomWidth: 0
    },
    inputStyle: {
        borderColor: '#E4E4E4',
        borderWidth: 1,
        fontSize: 14,
        padding: 10
    },
    line: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 0.5,
        width: '100%'
    },
    list: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 3,
        paddingVertical: 5,
        zIndex: -1
    },
    multiselectContainerStyle: {
        margin: 15,
    },
    nextButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        marginBottom: 30,
        marginTop: 30
    },
    pieChart: {
        height: 375
    },
    previousButton: {},
    previousButtonText: {
        color: AppStyles.color.COLOR_BLACK_TRANSP,
        fontSize: 14
    },
    saveButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        width: 200
    },
    selectStyle: {
        borderColor: AppStyles.color.COLOR_PRIMARY,
        // borderLeftWidth: 0,
        // borderTopWidth: 0,
        // borderRightWidth: 0,
        borderWidth: 2,
        // width: 250
    },
    selected: {
        backgroundColor: '#FA7B5F'
    },
    strengthContainer: {
        margin: 5,
        marginRight: 20,
        marginLeft: 20
    },
});

export default styles;