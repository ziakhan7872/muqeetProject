import React, {Component} from 'react';
import {Dimensions, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import HTML from 'react-native-render-html';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppStyles from '../config/styles';

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    render() {

        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                    <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                    <Icon
                        name={this.state.expanded ? 'chevron-up' : 'chevron-down'}
                        type="font-awesome"
                        backgroundColor="transparent"
                        color={AppStyles.color.COLOR_LIGHT_PINK}
                        size={25}
                    >
                    </Icon>
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        <HTML html={this.props.body} imagesMaxWidth={Dimensions.get('window').width} />
                    </View>
                }
            </View>
        );
    }

    toggleExpand = () => {
        this.setState({expanded: !this.state.expanded});
    };

}

Accordian.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderColor: AppStyles.color.COLOR_LIGHT_PINK,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    child: {
        borderTopWidth: 1,
        borderTopColor: '#f5f5f5',
        paddingTop: 10,
        padding: 20
    },
    parentHr: {
        height: 1,
        width: '100%'
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 56,
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 30,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    }

});