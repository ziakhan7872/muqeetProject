import React, {Component} from 'react';
import {ActivityIndicator, InteractionManager, StyleSheet, View} from 'react-native';
import PersonalFidbackListView from './PersonalFidbackListView';
import AppStyles from 'app/config/styles';
import {connect} from 'react-redux';
import * as personalFidbackListActions from 'app/actions/personalFidbackListActions';
import * as personalFidbackMessagesActions from 'app/actions/personalFidbackMessagesActions';
import MenuButton from 'app/components/MenuButton';
import PersonalFidbackRequestButton from 'app/components/PersonalFidbackRequestButton';

class PersonalFidbackListContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Τα Αιτήματά μου',
        headerLeft: <MenuButton navigation={navigation}/>,
        headerRight: <PersonalFidbackRequestButton/>,
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
        return <PersonalFidbackListView {...this.props} />;
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
    const {loadingReducer, personalFidbackListReducer} = state;
    return {
        personalFidbackList: personalFidbackListReducer.personalFidbackList,
        isFetchPersonalFidbackListLoading: loadingReducer.isFetchPersonalFidbackListLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPersonalFidbackList: () => dispatch(personalFidbackListActions.fetchPersonalFidbackList()),
        fetchPersonalFidbackMessages: id => dispatch(personalFidbackMessagesActions.fetchPersonalFidbackMessages(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalFidbackListContainer);
