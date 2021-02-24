import React, {Component} from 'react';
import {InteractionManager, ActivityIndicator, StyleSheet} from 'react-native';
import CalendarItemView from './CalendarItemView';
import AppStyles from 'app/config/styles';
import * as fidActions from 'app/actions/fidActions';
import {connect} from 'react-redux';

class CalendarItemContainer extends Component {
    static navigationOptions = ({navigation}) => {
        let header = navigation.getParam('day');
        return {
            title: header.day + '/' + header.month + '/' + header.year,
            headerBackTitle: 'Πίσω'
        };
    };

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
        return <CalendarItemView {...this.props} />;
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
    const {fetchFidsOfDayReducer, loadingReducer} = state;
    return {
        fidsOfDay: fetchFidsOfDayReducer.fidsOfDay,
        isFetchFidsOfDayLoading: loadingReducer.isFetchFidsOfDayLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFidsOfDay: date => dispatch(fidActions.fetchFidsOfDay(date)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarItemContainer);
