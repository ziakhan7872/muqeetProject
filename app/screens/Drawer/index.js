/* eslint-disable react/display-name */
import React from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import AutoFidbackStack from './AutoFidback';
import HomeTabs from './Home';
import Profile from '../Profile';
import Tutorial from '../Tutorial';
import SubscriptionPlans from '../SubscriptionPlans';
import LockdownMentalHealthTips from './LockdownMentalHealthTips';
import RelaxationExercises from './RelaxationExercises';
import AppStyles from 'app/config/styles';
import DrawerScreen from './DrawerScreen';
import PersonalFidbackStack from '../PersonalFidback';
import {Dimensions} from 'react-native';
import defaultNavigationOptions from 'app/config/defaultNavigationOptions';

const deviceWidth = Dimensions.get('window').width;

const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeTabs,
        navigationOptions: {
            drawerLabel: 'Αρχική',
            drawerIcon: ({focused}) => (
                <Icon
                    name="home"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        },
    },
    PersonalFidbackStack: {
        screen: createStackNavigator({PersonalFidbackStack}, {headerMode: 'none'}),
        navigationOptions: {
            drawerLabel: 'Personal Fidback',
            drawerIcon: ({focused}) => (
                <Icon
                    name="comment-discussion"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        }
    },
    RelaxationBlogStack: {
        screen: createStackNavigator({RelaxationExercises}, {defaultNavigationOptions: defaultNavigationOptions}),
        navigationOptions: {
            drawerLabel: 'Ασκήσεις χαλάρωσης',
            drawerIcon: ({focused}) => (
                <Icon
                    name="tasklist"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        }
    },
    LockdownMentalHealthTipsStack: {
        screen: createStackNavigator({LockdownMentalHealthTips}, {defaultNavigationOptions: defaultNavigationOptions}),
        navigationOptions: {
            drawerLabel: 'Lockdown Tips',
            drawerIcon: ({focused}) => (
                <Icon
                    name="shield"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        }
    },
    // SubscriptionPlans: {
    //     screen: createStackNavigator({SubscriptionPlans}, {defaultNavigationOptions: defaultNavigationOptions}),
    //     navigationOptions: {
    //         drawerLabel: 'Συνδρομές',
    //         drawerIcon: ({focused}) => (
    //             <Icon
    //                 name="credit-card"
    //                 size={22}
    //                 color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
    //             />
    //         ),
    //     }
    // },
    AutoFidbackStack: {
        screen: createStackNavigator({AutoFidbackStack}, {headerMode: 'none'}),
        navigationOptions: {
            drawerLabel: 'FiD-backs',
            drawerIcon: ({focused}) => (
                <Icon
                    name="bell"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        }
    },
    Profile: {
        screen: createStackNavigator({Profile}, {defaultNavigationOptions: defaultNavigationOptions}),
        navigationOptions: {
            drawerLabel: 'Το προφίλ μου',
            drawerIcon: ({focused}) => (
                <Icon
                    name="person"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        }
    },
    Tutorial: {
        screen: createStackNavigator({Tutorial}, {defaultNavigationOptions: {...defaultNavigationOptions, title: 'Οδηγίες χρήσης'}}),
        navigationOptions: {
            drawerLabel: 'Οδηγίες Χρήσης',
            drawerIcon: ({focused}) => (
                <Icon
                    name="repo"
                    size={22}
                    color={(focused) ? AppStyles.color.COLOR_PRIMARY : AppStyles.color.COLOR_BLACK}
                />
            ),
        }
    },
}, {
    overlayColor: AppStyles.color.COLOR_BLACK,
    contentComponent: DrawerScreen,
    drawerWidth: 0.8 * deviceWidth,
    drawerBackgroundColor: AppStyles.color.COLOR_WHITE,
    contentOptions: {
        inactiveLabelStyle: {
            fontSize: 16,
            color: AppStyles.color.COLOR_BLACK
        },
        activeLabelStyle: {
            fontSize: 16,
        },
        activeTintColor: AppStyles.color.COLOR_PRIMARY
    },

});
export default Drawer;