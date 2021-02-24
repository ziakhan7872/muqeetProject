import React, {Component} from 'react';
import {InteractionManager, ActivityIndicator, StyleSheet, Text} from 'react-native';
import ListView from './ListView';
import AppStyles from 'app/config/styles';
import * as blogActions from 'app/actions/blogActions';
import {connect} from 'react-redux';
import MenuButton from 'app/components/MenuButton';
import PFButton from 'app/components/PFButton';
import {Button} from 'react-native-elements';

class ListContainer extends Component {
    static navigationOptions = ({navigation}) => ({
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
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return <ListView {...this.props} />;
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
    const {articlesFetchReducer, loadingReducer} = state;
    return {
        articles: articlesFetchReducer.articles,
        nextPageUrl: articlesFetchReducer.nextPageUrl,
        isArticlesFetchLoading: loadingReducer.isArticlesFetchLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchArticles: (nextPageUrl, existingArticlesIds) => dispatch(blogActions.fetchArticles(nextPageUrl, existingArticlesIds)),
        openArticle: id => dispatch(blogActions.fetchArticle(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);
