/* eslint-disable react/display-name */
import React from 'react';
import {Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation';
import AppStyles from 'app/config/styles';

import Login from 'app/screens/Login';
import Profile from 'app/screens/Profile';
import Drawer from 'app/screens/Drawer';
import Tutorial from 'app/screens/Tutorial';
import PasswordReset from 'app/screens/PasswordReset';
import PersonalFidback from 'app/screens/PersonalFidback';
import HeaderContainer from 'app/components/HeaderContainer';
import defaultNavigationOptions from '../config/defaultNavigationOptions';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {header: null, gesturesEnabled: false}
        },
        Tutorial: {
            screen: Tutorial,
            navigationOptions: {header: null, gesturesEnabled: false}
        },
        Drawer: {
            screen: Drawer,
            navigationOptions: {header: null, gesturesEnabled: false},
        },
        Profile: {
            screen: Profile,
            navigationOptions: {header: null, gesturesEnabled: false}
        },
        PasswordReset: {
            screen: PasswordReset,
            navigationOptions: {header: null, gesturesEnabled: false}
        },
        PersonalFidback: {
            screen: PersonalFidback,
            navigationOptions: {header: null, gesturesEnabled: false}
        },
    },
    {
        initialRouteName: 'Login',
        defaultNavigationOptions: defaultNavigationOptions
    }
);

export default createAppContainer(RNApp);
