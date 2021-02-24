import React, {Component} from 'react';
import {InteractionManager, ActivityIndicator, StyleSheet} from 'react-native';
import AddFidView from './AddFidView';
import AppStyles from 'app/config/styles';
import * as fidActions from 'app/actions/fidActions';
import {connect} from 'react-redux';
import MenuButton from 'app/components/MenuButton';
import PFButton from 'app/components/PFButton';

class AddFidContainer extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Τι νιώθεις;',
        headerLeft : <MenuButton navigation={navigation} />,
        headerRight: <PFButton navigation={navigation} />
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
        return <AddFidView {...this.props} />;

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
    const {fetchSecondaryEmotionsReducer, fetchBodyReactionsReducer, fetchSubjectsReducer, loadingReducer, loginReducer} = state;
    return {
        token: loginReducer.token,
        parentSubjects: fetchSubjectsReducer.parentSubjects,
        childrenSubjects: fetchSubjectsReducer.childrenSubjects,
        bodyReactions: fetchBodyReactionsReducer.bodyReactions,
        secondaryEmotions: fetchSecondaryEmotionsReducer.secondaryEmotions,
        isStoreFidLoading: loadingReducer.isStoreFidLoading,
        isFetchSecondaryEmotionsLoading: loadingReducer.isFetchSecondaryEmotionsLoading,
        isFetchSubjectsLoading: loadingReducer.isFetchSubjectsLoading,
        isFetchBodyReactionsLoading: loadingReducer.isFetchBodyReactionsLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        storeFid: fid => dispatch(fidActions.storeFid(fid)),
        fetchBodyReactions: emotionId => dispatch(fidActions.fetchBodyReactions(emotionId)),
        fetchSubjects: () => dispatch(fidActions.fetchSubjects()),
        fetchSecondaryEmotions: () => dispatch(fidActions.fetchSecondaryEmotions()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddFidContainer);
