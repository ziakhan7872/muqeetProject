/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';
import AppStyles from 'app/config/styles';
import AddFid from './Fid/AddFid';
import CalendarStack from './CalendarStack';
import BlogStack from './Blog';
import defaultNavigationOptions from 'app/config/defaultNavigationOptions';

const HomeTabs = createBottomTabNavigator({
    BlogStack: {
        screen: createStackNavigator({BlogStack},{headerMode: 'none'}),
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => (
                <Icon name='book' color={focused ? AppStyles.color.COLOR_PRIMARY : '#B3B3B3'}
                    size={25}/>)
        }
    },
    AddFid: {
        screen: createStackNavigator({AddFid},{defaultNavigationOptions: defaultNavigationOptions}),
        navigationOptions: {
            tabBarIcon: ({focused}) => (
                <Icon name='home' color={focused ? AppStyles.color.COLOR_PRIMARY : '#B3B3B3'}
                    size={25}/>)
        }
    },
    CalendarStack: {
        screen: createStackNavigator({CalendarStack},{headerMode: 'none'}),
        navigationOptions: {
            header: null,
            tabBarIcon: ({focused}) => {
                return (<Icon name='calendar' color={focused ? AppStyles.color.COLOR_PRIMARY : '#B3B3B3'} size={25}/>);
            }
        }
    },
}, {
    initialRouteName: 'AddFid',
    tabBarOptions: {
        showLabel: false,
        style: {
            backgroundColor: AppStyles.color.COLOR_WHITE,
        }
    }
});

// HomeTabs.navigationOptions = ({ navigation }) => {
//     const { routeName } = navigation.state.routes[navigation.state.index];
//
//     // You can do whatever you like here to pick the title based on the route name
//     const headerTitle = routeName;
//
//     return {
//         headerTitle,
//     };
// };
// export default HomeTabs;
//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({HomeTabs}, {headerMode: 'none'});