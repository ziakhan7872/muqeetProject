import {
    StyleSheet
} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10
    },
    cardButton: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
    },
    container: {
        marginBottom: 10
    },
    noFidbacksText: {
        fontSize: 18,
        textAlign: 'center',
        color: AppStyles.color.COLOR_PRIMARY
    },
    noFidbacksWrapper: {
        alignItems: 'center',
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop: 50,
        paddingLeft: 25,
        paddingRight: 25    
    }
});

export default styles;