import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    header: {
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    body: {
        fontSize: 15,
        marginTop: 10,
        marginBottom: 10
    },
    activityIndicator: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

export default styles;