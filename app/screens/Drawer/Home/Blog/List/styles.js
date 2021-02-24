import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },
    articleAuthor: {
        fontStyle: 'italic',
        paddingRight: 5
    },
    articleCategory: {
        fontStyle: 'italic'
    },
    cardBody: {
        color: AppStyles.color.COLOR_BLACK,
        fontSize: 16,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 5,
        marginTop: 20
    },
    cardButton: {
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#ff4f87',
        borderRadius: 0,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 15,
        width: 200
    },
    cardHeader: {
        borderBottomColor: '#d8d8d8',
        borderBottomWidth: 1,
        color: AppStyles.color.COLOR_PRIMARY,
        fontSize: 22,
        fontWeight: 'bold',
        margin: 20,
        paddingBottom: 10,
        textAlign: 'left'
    },
});

export default styles;