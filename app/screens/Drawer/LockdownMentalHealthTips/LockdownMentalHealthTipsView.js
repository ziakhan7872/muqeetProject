import React, {Component} from 'react';
import {SafeAreaView, InteractionManager, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Accordian from 'app/components/AccordionComponent';

class LockdownMentalHealthTipsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            refreshing: false,
            activeSections: []
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchLockdownMentalHealthTips('');
        this.setState({refreshing: false});
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.fetchLockdownMentalHealthTips('');
        });
    }

    fetchLockdownMentalHealthTips = (nextPageUrl) => {
        this.props.fetchLockdownMentalHealthTips(nextPageUrl, []);
    };

    endReached = () => {
        this.fetchLockdownMentalHealthTips(this.props.lockdownMentalHealthTipsNextPageUrl);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    data={this.props.lockdownMentalHealthTips}
                    renderItem={({item}) => {
                        return (
                            <Accordian
                                title={item.title}
                                body={item.body}
                            />
                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

LockdownMentalHealthTipsView.propTypes = {
    openArticle: PropTypes.func,
    fetchLockdownMentalHealthTips: PropTypes.func,
    lockdownMentalHealthTips: PropTypes.array,
    isLockdownMentalHealthTipsFetchLoading: PropTypes.bool,
    lockdownMentalHealthTipsNextPageUrl: PropTypes.string
};

export default LockdownMentalHealthTipsView;
