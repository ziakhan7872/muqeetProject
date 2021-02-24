import { createStackNavigator } from 'react-navigation';

import List from './List';
import Item from './Item';
import defaultNavigationOptions from 'app/config/defaultNavigationOptions';

const AutoFidbackStack = createStackNavigator(
    {
        AutoFidbackList: {
            screen: List,
        },
        AutoFidbackItem: {
            screen: Item,
        },
    },
    {
        initialRouteName: 'AutoFidbackList',
        defaultNavigationOptions: {...defaultNavigationOptions, title: 'FiD-backs'}
    }
);

export default AutoFidbackStack;
