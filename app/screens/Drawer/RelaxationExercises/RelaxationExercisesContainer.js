import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import RelaxationExercisesView from './RelaxationExercisesView';
import AppStyles from 'app/config/styles';
import * as blogActions from 'app/actions/blogActions';
import { connect } from 'react-redux';
import MenuButton from 'app/components/MenuButton';
import PFButton from 'app/components/PFButton';

class RelaxationExercisesContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Ασκήσεις χαλάρωσης',
        headerLeft : <MenuButton navigation={navigation} />,
        // headerRight: <PFButton navigation={navigation} />
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
            return <ActivityIndicator style={styles.activityIndicator} size="large" color={AppStyles.color.COLOR_PRIMARY} />;
        }
        return <RelaxationExercisesView {...this.props} />;
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
    const { relaxationExercisesFetchReducer, loadingReducer } = state;
    return {
        relaxationExercises: relaxationExercisesFetchReducer.relaxationExercises,
        relaxationExercisesNextPageUrl: relaxationExercisesFetchReducer.relaxationExercisesNextPageUrl,
        isRelaxationExercisesFetchLoading: loadingReducer.isRelaxationExercisesFetchLoading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchRelaxationExercises: (relaxationExercisesNextPageUrl, existingRelaxationExercisesIds) => dispatch(blogActions.fetchRelaxationExercises(relaxationExercisesNextPageUrl, existingRelaxationExercisesIds)),
        openArticle: id => dispatch(blogActions.fetchArticle(id))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RelaxationExercisesContainer);
