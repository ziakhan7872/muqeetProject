import React, {Component} from 'react';
import {Text, ScrollView, View, InteractionManager, ActivityIndicator, Image, Dimensions} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import AppStyles from 'app/config/styles';
import {Button, Divider} from 'react-native-elements';
import HTML from 'react-native-render-html';

class ArticleView extends Component {
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

    _goBack() {
        this.props.navigation.goBack();
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }

        const screenWidth = Math.round(Dimensions.get('window').width);

        return (
            <ScrollView style={styles.container}>
                {this.props.article.header_image_url && (
                    <Image
                        style={{width: screenWidth, height: 250}}
                        source={{uri: this.props.article.header_image_url}}
                    />
                )}
                <Text style={styles.articleHeader}>{this.props.article.title}</Text>
                <HTML html={this.props.article.body} imagesMaxWidth={Dimensions.get('window').width} />
                <Divider style={{backgroundColor: '#d8d8d8', margin: 15}}/>
                <Button
                    title="Πίσω"
                    onPress={() => this._goBack()}
                    buttonStyle={styles.backButton}/>
            </ScrollView>
        );
    }
}

ArticleView.propTypes = {
    article: PropTypes.object,
    isArticleFetchLoading: PropTypes.bool
};

export default ArticleView;
