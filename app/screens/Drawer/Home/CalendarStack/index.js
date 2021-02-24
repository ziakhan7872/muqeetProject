import {createStackNavigator} from 'react-navigation';
import Calendar from './Calendar';
import CalendarItem from './CalendarItem';
import defaultNavigationOptions from 'app/config/defaultNavigationOptions';

const CalendarStack = createStackNavigator(
    {
        Calendar: {
            screen: Calendar,
        },
        CalendarItem: {
            screen: CalendarItem,
        },
    },
    {
        mode: 'modal',
        defaultNavigationOptions: {...defaultNavigationOptions, headerBackTitle: 'Πίσω'}
    }
);

export default CalendarStack;