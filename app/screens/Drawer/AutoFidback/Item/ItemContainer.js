import React, { Component } from 'react';
import ItemView from './ItemView';
import { connect } from 'react-redux';
import {ActivityIndicator, InteractionManager, StyleSheet} from 'react-native';
import AppStyles from 'app/config/styles';
import * as autoFidbackActions from '../../../../actions/autoFidbackActions';

class ItemContainer extends Component {
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
        return <ItemView {...this.props} />;
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
    const { autoFidbackFetchReducer, loadingReducer } = state;
    return {
        autoFidback: autoFidbackFetchReducer.autoFidback,
        isFetchAutoFidbackLoading: loadingReducer.isFetchAutoFidbackLoading,
        isStoreAutofidbackNoteLoading: loadingReducer.isStoreAutofidbackNoteLoading,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        storeAutoFidbackNote: (note, uuid) => dispatch(autoFidbackActions.storeAutoFidbackNote(note, uuid))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);
