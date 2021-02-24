import {createStackNavigator} from 'react-navigation';

import PersonalFidbackProfile from './PersonalFidbackProfile';
import PersonalFidbackRequest from './PersonalFidbackRequest';
import PersonalFidbackList from './PersonalFidbackList';
import PersonalFidbackChat from './PersonalFidbackChat';
import defaultNavigationOptions from 'app/config/defaultNavigationOptions';

const PersonalFidbackStack = createStackNavigator(
    {
        PersonalFidbackProfile: {
            screen: PersonalFidbackProfile,
        },
        PersonalFidbackList: {
            screen: PersonalFidbackList,
        },
        PersonalFidbackRequest: {
            screen: PersonalFidbackRequest,
        },
        PersonalFidbackChat: {
            screen: PersonalFidbackChat,
        },
    },
    {
        initialRouteName: 'PersonalFidbackProfile',
        defaultNavigationOptions: {...defaultNavigationOptions, title: 'Personal Fidback', headerBackTitle: 'Πίσω'}
    }
);

export default PersonalFidbackStack;
