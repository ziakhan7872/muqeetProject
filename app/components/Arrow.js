import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';
import AppStyles from '../config/styles';

class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {this.props.direction === 'left' && (
                    <Icon
                        name='chevron-left'
                        color={AppStyles.color.COLOR_PRIMARY}
                        size={25}
                    />
                )}
                {this.props.direction === 'right' && (
                    <Icon
                        name='chevron-right'
                        color={AppStyles.color.COLOR_PRIMARY}
                        size={25}
                    />
                )}
            </View>
        );
    }
}

BackButton.propTypes = {
    direction: PropTypes.string
};

export default BackButton;