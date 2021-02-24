import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    articleAuthor: {
        fontStyle: 'italic',
        marginLeft: 15,
        marginTop: 15,
    },
    articleBody: {
        fontSize: 17,
        margin: 15,
        marginBottom: 30,
        color: AppStyles.color.COLOR_BLACK,
        lineHeight: 25
    },
    articleCategory: {
        fontStyle: 'italic',
        marginLeft: 15
    },
    articleHeader: {
        textAlign: 'center',
        color: '#323232',
        fontSize: 22,
        fontWeight: 'bold',
        margin: 15,
        color: AppStyles.color.COLOR_BLACK,
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
        paddingBottom: 10
    },
    backButton: {
        marginTop: 20,
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
    },
    cardButton: {
        borderRadius: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    cardHeader: {
        marginBottom: 10
    },
    container: {
        margin: 10
    }
});

export default styles;