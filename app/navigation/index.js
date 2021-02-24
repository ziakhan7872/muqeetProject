import React, { Component } from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';

export default class AppNavigator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationStack
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}