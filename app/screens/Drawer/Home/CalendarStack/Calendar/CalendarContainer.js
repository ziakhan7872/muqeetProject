import React, {Component} from 'react';
import {InteractionManager, ActivityIndicator, StyleSheet} from 'react-native';
import CalendarView from './CalendarView';
import AppStyles from 'app/config/styles';
import * as fidActions from 'app/actions/fidActions';
import {connect} from 'react-redux';
import MenuButton from 'app/components/MenuButton';

class CalendarContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Το ημερολόγιό μου',
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
        return <CalendarView {...this.props} />;
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
    const {fetchFidsReducer, loadingReducer, loginReducer} = state;
    return {
        fids: fetchFidsReducer.fids,
        isFetchFidsLoading: loadingReducer.isFetchFidsLoading,
        isLoggedIn: loginReducer.isLoggedIn,
        isFetchFidsOfDayLoading: loadingReducer.isFetchFidsOfDayLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFids: date => dispatch(fidActions.fetchFids(date)),
        fetchFidsOfDay: date => dispatch(fidActions.fetchFidsOfDay(date)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarContainer);
