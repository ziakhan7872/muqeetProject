import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    },
    container: {
        marginBottom: 5,
        padding: 10
    },
    dateHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 13,
        textAlign: 'left'
    },
    divider: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15
    },
    hashTag: {
        borderColor: AppStyles.color.COLOR_PRIMARY,
        borderRadius: 5,
        borderWidth: 1,
        color: AppStyles.color.COLOR_PRIMARY,
        fontSize: 11,
        margin: 2,
        padding: 5
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
        textAlign: 'center',
        color: '#000'
    },
    scrollContainer: {
        padding: 10
    },
    storeButton: {
        backgroundColor: '#444',
        marginLeft: 15,
        marginRight: 15
    },
    textGray: {
        color: '#999',
        fontSize: 13,
        paddingLeft: 10
    },
    titleHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'left',
        color: AppStyles.color.COLOR_PRIMARY
    }
});

export default styles;