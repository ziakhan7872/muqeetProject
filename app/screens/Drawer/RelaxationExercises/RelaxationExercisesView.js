import React, {Component} from 'react';
import {SafeAreaView, InteractionManager, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Accordian from 'app/components/AccordionComponent';

class RelaxationExercisesView extends Component {
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
        this.fetchRelaxationExercises('');
        this.setState({refreshing: false});
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.fetchRelaxationExercises('');
        });
    }

    fetchRelaxationExercises = (nextPageUrl) => {
        // let existingRelaxationExercisesIds = this.props.relaxationExercises.map(({id}) => id);
        this.props.fetchRelaxationExercises(nextPageUrl, []);
    };

    endReached = () => {
        this.fetchRelaxationExercises(this.props.relaxationExercisesNextPageUrl);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    data={this.props.relaxationExercises}
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

RelaxationExercisesView.propTypes = {
    openArticle: PropTypes.func,
    fetchRelaxationExercises: PropTypes.func,
    relaxationExercises: PropTypes.array,
    isRelaxationExercisesFetchLoading: PropTypes.bool,
    relaxationExercisesNextPageUrl: PropTypes.string
};

export default RelaxationExercisesView;
