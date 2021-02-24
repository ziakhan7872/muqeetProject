import React, {Component} from 'react';
import {ActivityIndicator, Image, StatusBar, StyleSheet, View,Text, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import configureStore from 'app/store/configureStore';
import AppStyles from 'app/config/styles';

const {persistor, store} = configureStore();

const LOGO = require('../assets/images/ic_launcher.png');

const LoadingIcon = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={AppStyles.color.COLOR_PRIMARY}
                translucent={false}
            />
            <Image style={styles.logo} source={LOGO}/>
            <ActivityIndicator style={styles.activityIndicator} size="large" color={AppStyles.color.COLOR_WHITE}/>
        </View>
    );
};


export default class Entrypoint extends Component {
    constructor(props) {
        super(props);
        StatusBar.setBackgroundColor('#e5006d');
        StatusBar.setBarStyle('light-content');
        StatusBar.setTranslucent(false);
    }


    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<LoadingIcon/>}
                    persistor={persistor}
                >
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor="#e5006d"
                        translucent={false}
                    />
                    <Navigator/>
                </PersistGate>
            </Provider>
            // <View><Text>Hello</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: AppStyles.color.COLOR_PRIMARY,
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 20
    }
});
