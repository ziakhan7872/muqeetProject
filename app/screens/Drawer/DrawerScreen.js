import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    InteractionManager,
    ActivityIndicator,
    Image,
    View,
    Text,
    Button,
    Platform,
    StatusBar,
    TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';
import {DrawerItems, SafeAreaView} from 'react-navigation';
import AppStyles from 'app/config/styles';
import {connect} from 'react-redux';
import * as blogActions from '../../actions/blogActions';

const LOGO = require('../../../assets/images/ic_launcher.png');

class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return (
            <View  style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
                {Platform.OS === 'ios' && (
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor={AppStyles.color.COLOR_PRIMARY}
                        translucent={false}
                        hidden={this.props.navigation.state.isDrawerOpen}
                    />
                )}
                <View style={{
                    height: 175,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: AppStyles.color.COLOR_PRIMARY
                }}>
                    <Image style={{margin: 10}} source={LOGO}/>
                </View>
                <Text style={{margin: 10}}>Καλώς ήρθες, {this.props.username}</Text>
                <ScrollView>
                    <DrawerItems {...this.props} labelStyle={{fontWeight: '300'}}/>
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                isReady: true
            });
        });
    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

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
)(DrawerScreen);