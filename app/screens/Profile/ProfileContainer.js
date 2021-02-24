import React, {Component} from 'react';
import {InteractionManager, ActivityIndicator, StyleSheet} from 'react-native';
import * as loginActions from 'app/actions/loginActions';
import * as profileActions from 'app/actions/profileActions';
import ProfileView from './ProfileView';
import AppStyles from 'app/config/styles';
import {connect} from 'react-redux';
import MenuButton from 'app/components/MenuButton';
import PFButton from 'app/components/PFButton';

class ProfileContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Το προφίλ μου',
        headerLeft: <MenuButton navigation={navigation}/>,
        // headerRight: <PFButton navigation={navigation}/>
    });

    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                isReady: true
            });
        });
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return <ProfileView {...this.props} />;
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
        isStoreProfileLoading: loadingReducer.isStoreProfileLoading,
        user: loginReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(loginActions.logout());
        },
        storeProfile: user => {
            dispatch(profileActions.storeProfile(user));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContainer);
