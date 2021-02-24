/* eslint-disable no-console */
import React, {Component} from 'react';
import {
    SafeAreaView,
    InteractionManager,
    ActivityIndicator,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from 'app/config/styles';
import {NavigationActions, StackActions} from 'react-navigation';
import Arrow from 'app/components/Arrow';

LocaleConfig.locales['el'] = {
    monthNames: [
        'Ιανουάριος',
        'Φεβρουάριος',
        'Μάρτιος',
        'Απρίλιος',
        'Μάιος',
        'Ιούνιος',
        'Ιούλιος',
        'Αύγουστος',
        'Σεπτέμβριος',
        'Οκτώβριος',
        'Νοέμβριος',
        'Δεκέμβριος'
    ],
    monthNamesShort: [
        'Ιαν.',
        'Φεβρ.',
        'Μαρ.',
        'Απρ.',
        'Μαιος',
        'Ιούν.',
        'Ιούλ.',
        'Αυγ.',
        'Σεπτ.',
        'Οκτ.',
        'Νοέμβ.',
        'Δεν.'
    ],
    dayNames: [
        'Κυριακή',
        'Δευτέρα',
        'Τρίτη',
        'Τετάρτη',
        'Πέμπτη',
        'Παρασκεύη',
        'Σάββατο'
    ],
    dayNamesShort: ['Κυρ.', 'Δευτ.', 'Τρ.', 'Τετ.', 'Πεμ.', 'Παρ.', 'Σαβ.']
};

LocaleConfig.defaultLocale = 'el';

class CalendarView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            isModalVisible: false,
            imageUri: null,
            currentDate: new Date()
        };

        this.formatDate = this.formatDate.bind(this);
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.didFocusHandler = this.props.navigation.addListener('didFocus', this.onScreenFocus);
            this.onScreenFocus();
            this.setState({
                isReady: true
            });
        });
    }

    componentWillUnmount() {
        this.didFocusHandler.remove();
    }

    onScreenFocus = () => {
        if (!this.props.isFetchFidsLoading) {
            this.fetchFids(this.state.currentDate);
        }
    };

    fetchFids = date => {
        this.props.fetchFids(this.formatDate(date));
    };

    formatDate = date => {
        if (date.hasOwnProperty('month') && date.hasOwnProperty('year')) {
            return date;
        } else if (date instanceof Date) {
            return {month: date.getMonth() + 1, year: date.getFullYear()};
        } else {
            let d = new Date();
            return {month: d.getMonth() + 1, year: d.getFullYear()};
        }
    };

    goToHome() {
        if (this.props.isLoggedIn) {
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    key: null,
                    actions: [NavigationActions.navigate({routeName: 'Drawer'})]
                })
            );
        }
    }

    openDay = day => {
        this.props.fetchFidsOfDay(day);
    };

    render() {
        const {isReady, isFetchFidsLoading} = this.state;
        if (!isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return (
            <SafeAreaView style={styles.container}>
                <Calendar
                    markedDates={this.props.fids}
                    markingType={'custom'}
                    onDayPress={day => this.openDay(day)}
                    monthFormat={'MMMM yyyy'}
                    hideExtraDays={true}
                    disableMonthChange={false}
                    hideDayNames={false}
                    showWeekNumbers={false}
                    renderArrow={direction => (<Arrow direction={direction}/>)}
                    onMonthChange={month => this.fetchFids(month)}
                    theme={{
                        textSectionTitleColor: '#7e868e',
                        selectedDayBackgroundColor: AppStyles.color.COLOR_PRIMARY,
                        todayTextColor: AppStyles.color.COLOR_PRIMARY,
                        arrowColor: AppStyles.color.COLOR_PRIMARY,
                        monthTextColor: '#bb0000',
                        indicatorColor: AppStyles.color.COLOR_PRIMARY,
                        textDayFontSize: 17,
                        textMonthFontSize: 24,
                        textDayHeaderFontSize: 15,
                    }}
                />
                { isFetchFidsLoading && (
                    <ActivityIndicator size="large" color={AppStyles.color.COLOR_PRIMARY} />
                )}
            </SafeAreaView>
        );
    }
}

CalendarView.propTypes = {
    fetchFids: PropTypes.func,
    fetchFidsOfDay: PropTypes.func,
    fids: PropTypes.object,
    isFetchFidsLoading: PropTypes.bool,
    isFetchFidsOfdayLoading: PropTypes.bool,
    isLoggedIn: PropTypes.bool
};

export default CalendarView;