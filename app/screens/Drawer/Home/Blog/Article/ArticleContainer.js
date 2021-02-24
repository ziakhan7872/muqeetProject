import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import ArticleView from './ArticleView';
import AppStyles from 'app/config/styles';
import { connect } from 'react-redux';

class ArticleContainer extends Component {
    static navigationOptions = ({navigation}) => {
        return {
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
            return <ActivityIndicator style={styles.activityIndicator} size="large" color={AppStyles.color.COLOR_PRIMARY} />;
        }
        return <ArticleView {...this.props} />;
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
    const { articleFetchReducer, loadingReducer } = state;
    return {
        article: articleFetchReducer.article,
        isArticleFetchLoading: loadingReducer.isArticleFetchLoading
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleContainer);
