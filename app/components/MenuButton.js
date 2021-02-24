import React, {Component} from 'react';
import AppStyles from '../config/styles';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';
import {DrawerActions} from 'react-navigation';

class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginLeft: 15,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button type="clear" icon={
                    <Icon
                        name="three-bars"
                        size={30}
                        color={AppStyles.color.COLOR_WHITE}
                    />
                } onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}/>
            </View>
        );
    }
}

MenuButton.propTypes = {
    navigation: PropTypes.object
};

export default MenuButton;