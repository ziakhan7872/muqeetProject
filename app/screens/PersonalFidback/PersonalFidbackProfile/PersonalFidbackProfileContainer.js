import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, InteractionManager} from 'react-native';
import PersonalFidbackProfileView from './PersonalFidbackProfileView';
import AppStyles from 'app/config/styles';
import {connect} from 'react-redux';
import * as personalFidbackProfileActions from 'app/actions/personalFidbackProfileActions';
import MenuButton from 'app/components/MenuButton';

class PersonalFidbackProfileContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Personal FiDback',
        headerLeft: <MenuButton navigation={navigation}/>,
    });

    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            if (this.props.hasPersonalFidbackProfile) {
                this.props.navigation.navigate('PersonalFidbackList');
            } else {
                this.setState({isReady: true});
            }
        });
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return <PersonalFidbackProfileView {...this.props} />;
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

function mapStateToProps(state) {
    const {loginReducer, loadingReducer} = state;
    return {
        isStorePersonalFidbackLoading: loadingReducer.isStorePersonalFidbackLoading,
        hasPersonalFidbackProfile: loginReducer.hasPersonalFidbackProfile,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        storePersonalFidbackProfile: request => dispatch(personalFidbackProfileActions.storePersonalFidbackProfile(request)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalFidbackProfileContainer);
