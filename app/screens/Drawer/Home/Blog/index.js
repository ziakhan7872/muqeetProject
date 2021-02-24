import { createStackNavigator } from 'react-navigation';

import List from './List';
import Article from './Article';
import defaultNavigationOptions from 'app/config/defaultNavigationOptions';

const BlogStack = createStackNavigator(
    {
        List: {
            screen: List,
        },
        Article: {
            screen: Article,
        },
    },
    {
        initialRouteName: 'List',
        defaultNavigationOptions: {...defaultNavigationOptions, title: 'Άρθρα'}
    }
);

export default BlogStack;
