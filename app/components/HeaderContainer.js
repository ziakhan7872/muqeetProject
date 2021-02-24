import React, {Component} from 'react';
import AppStyles from 'app/config/styles';
import {View, StatusBar} from 'react-native';
import {Header} from 'react-native-elements';
import {connect} from 'react-redux';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header {...this.props}
                    statusBarProps={{barStyle: 'light-content', translucent: false, backgroundColor: '#e5006d'}}
                    centerComponent={{
                        text: this.props.username,
                        style: {color: AppStyles.color.COLOR_WHITE, fontSize: 25}
                    }} containerStyle={{marginTop: -StatusBar.currentHeight}}/>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const {loginReducer} = state;
    return {username: loginReducer.username};
}

function mapDispatchToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
