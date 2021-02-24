import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';
import {Button} from 'react-native-elements';
import AppStyles from '../config/styles';

class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // <Button type="clear" icon={
        // <Icon name='gear'
        //       size={30}
        //       color={AppStyles.color.COLOR_WHITE}
        // />
        // } onPress={() => this.props.navigation.navigate('PersonalFidback')}/>
        return (
            <View style={{
                flex: 1,
                marginRight: 15,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Button title="PF" titleStyle={{ fontSize: 25, paddingLeft: 10, color: '#F1C40F' }} type="clear" icon={
                <Icon name='comment-discussion'
                    size={30}
                    color= '#F1C40F'
                />
                }
                onPress={() => this.props.navigation.navigate('PersonalFidbackStack')}/>
            </View>
        );
    }
}

MenuButton.propTypes = {
    navigation: PropTypes.object
};

export default MenuButton;