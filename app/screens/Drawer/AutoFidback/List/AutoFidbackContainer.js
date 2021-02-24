import React, {Component} from 'react';
import AutoFidbackView from './AutoFidbackView';
import {connect} from 'react-redux';
import * as autoFidbackActions from 'app/actions/autoFidbackActions';
import {ActivityIndicator, InteractionManager, StyleSheet, Text} from 'react-native';
import AppStyles from 'app/config/styles';
import MenuButton from 'app/components/MenuButton';
import PFButton from 'app/components/PFButton';

class AutoFidbackContainer extends Component {
    static navigationOptions = ({navigation}) => ({
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
        return <AutoFidbackView {...this.props} />;
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
    const {autoFidbacksFetchReducer, loadingReducer} = state;
    return {
        autoFidbacks: autoFidbacksFetchReducer.autoFidbacks,
        nextPageUrl: autoFidbacksFetchReducer.nextPageUrl,
        isAutoFidbacksFetchLoading: loadingReducer.isAutoFidbacksFetchLoading,
        existingAutoFidbacksIds: loadingReducer.isAutoFidbackFetchLoading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAutoFidbacks: (autoFidbackNextPageUrl, existingAutoFidbacksIds) => dispatch(autoFidbackActions.fetchAutoFidbacks(autoFidbackNextPageUrl, existingAutoFidbacksIds)),
        openAutoFidback: id => dispatch(autoFidbackActions.fetchAutoFidback(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoFidbackContainer);
