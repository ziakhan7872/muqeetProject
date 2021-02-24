import {StyleSheet} from 'react-native';
import AppStyles from 'app/config/styles';

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        paddingLeft: 20,
        paddingRight: 20
    },
    comment: {
        color: '#999'
    },
    container: {
        flex: 1
    },
    emotion_name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    emptyDate: {
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        height: 80,
        width: 80,
        borderRadius: 50
    },
    item: {
        backgroundColor: 'white',
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        marginTop: 17,
        padding: 10
    },
    main_title: {
        paddingLeft: 10,
        paddingRight: 15
    },
    modalImage: {
        height: 300,
        width: null,
    },
    monthName: {
        color: AppStyles.color.COLOR_PRIMARY,
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'
    },
    time: {
        color: '#999',
        fontSize: 12,
        textAlign: 'right'
    }
});

export default styles;
