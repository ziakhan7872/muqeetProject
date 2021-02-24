import React, {Component} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {ListItem, Badge} from 'react-native-elements';
import AppStyles from 'app/config/styles';

class PersonalFidbackListView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.didFocus = this.props.navigation.addListener('didFocus', this.onScreenFocus);
    }

    componentWillUnmount() {
        this.didFocus.remove();
    }

    onScreenFocus = () => {
        this.props.fetchPersonalFidbackList();
        this.setState({isReady: true});
    };

    onRefresh() {
        this.props.fetchPersonalFidbackList();
    }

    openChat(id) {
        this.props.fetchPersonalFidbackMessages(id);
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item}) => (
        <ListItem
            title={item.title !== null ? item.title : `${item.created_at}-${item.id}`}
            titleStyle={{
                fontWeight: item.has_unread_messages ? 'bold' : null,
                color: item.has_unread_messages ? AppStyles.color.COLOR_PRIMARY : null,
            }}
            rightSubtitle={
                item.status === 'open' ? (
                    <Badge value={'Ανοιχτό'} status={(item.status === 'open' ? 'primary' : 'success')}
                           badgeStyle={{padding: 0, height: 28, borderRadius: 0}}/>) : null
            }
            leftIcon={{name: 'comment-discussion', type: 'octicon', color: AppStyles.color.COLOR_PRIMARY}}
            bottomDivider
            chevron
            onPress={() => this.openChat(item.request_id)}
        />
    );

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.props.personalFidbackList.length > 0 && (
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.props.personalFidbackList}
                        renderItem={this.renderItem}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.props.isFetchPersonalFidbackListLoading}
                    />
                )}
                {this.props.personalFidbackList.length === 0 && (
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        paddingTop: 20
                    }}>
                        <Text>Στείλε το πρώτο σου αίτημα για Personal FiDback!</Text>
                    </View>
                )}
            </SafeAreaView>
        );
    }
}

PersonalFidbackListView.propTypes = {
    fetchPersonalFidbackMessages: PropTypes.func,
    fetchPersonalFidbackList: PropTypes.func,
    personalFidbackList: PropTypes.array,
    isFetchPersonalFidbackListLoading: PropTypes.bool,
};

export default PersonalFidbackListView;
