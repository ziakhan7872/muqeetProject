import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, InteractionManager, Image} from 'react-native';
import {Card, Button, Icon, Tile} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from 'app/config/styles';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.fetchArticles('');
        this.setState({refreshing: false});
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            if (this.props.articles.length === 0) {
                this.fetchArticles('');
            }
        });
    }

    fetchArticles = (nextPageUrl) => {
        // let existingArticlesIds = this.props.articles.map(({id}) => id);
        this.props.fetchArticles(nextPageUrl, []);
    };

    openArticle = (id) => {
        this.props.openArticle(id);
    };

    endReached = () => {
        this.fetchArticles(this.props.nextPageUrl);
    };

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                    data={this.props.articles}
                    renderItem={({item}) => {
                        return (
                            <Card
                                containerStyle={{
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 5,
                                    },
                                    shadowOpacity: 0.20,
                                    shadowRadius: 6.68,
                                    elevation: 11,
                                    marginBottom: 15,
                                    borderColor: '#fff'
                                }}
                                key={item.id}
                                image={{uri: item.header_image_url}}
                                title={(<Text style={styles.cardHeader}
                                    onPress={() => this.openArticle(item.id)}>{item.title}</Text>)}>
                                <Text style={styles.cardBody}>{item.body}</Text>
                                <Button
                                    buttonStyle={styles.cardButton}
                                    title='Διάβασε περισσότερα'
                                    onPress={() => this.openArticle(item.id)}/>
                            </Card>

                        );
                    }}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={(
                        <Button type="clear" title="Προβολή περισσότερων" onPress={() => this.endReached()}
                            loading={this.props.isArticlesFetchLoading}/>)}
                    disableVirtualization maxToRenderPerBatch={3}/>
            </SafeAreaView>
        );
    }
}

ListView.propTypes = {
    fetchArticles: PropTypes.func,
    openArticle: PropTypes.func,
    articles: PropTypes.array,
    isArticlesFetchLoading: PropTypes.bool,
    nextPageUrl: PropTypes.string
};

export default ListView;
