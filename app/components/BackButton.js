import React, {Component} from 'react';
import AppStyles from '../config/styles';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';

class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button type="clear" icon={
                <Icon
                    name="three-bars"
                    size={25}
                    color={AppStyles.color.COLOR_WHITE}
                />
            } onPress={() => this.props.navigation.goBack()}/>
        );
    }
}

BackButton.propTypes = {
    navigation: PropTypes.object
};

export default BackButton;