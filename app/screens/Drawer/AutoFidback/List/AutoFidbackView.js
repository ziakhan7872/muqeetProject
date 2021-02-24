import React, {Component} from 'react';
import {FlatList, ScrollView, View, Text, InteractionManager, RefreshControl} from 'react-native';
import {ListItem} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

class AutoFidbackView extends Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            // if (this.props.autoFidbacks.length === 0) {
            this.fetchAutoFidbacks('');
            // }
        });
    }

    fetchAutoFidbacks = nextPageUrl => {
        // let existingAutoFidbacksIds = this.props.autoFidbacks.map(({uuid}) => uuid);
        this.props.fetchAutoFidbacks(nextPageUrl, []);
    };

    openAutoFidback(id) {
        this.props.openAutoFidback(id);
    }

    renderRow({item}) {
        return (
            <View>
                <ListItem
                    title={'Συναίσθημα: ' + item.emotion.name}
                    subtitle={'Χρονική περίοδος: ' + item.date_range}
                    onPress={() => this.openAutoFidback(item.uuid)}
                    containerStyle={{
                        borderWidth: 4,
                        borderColor: '#e5006d',
                        borderTopWidth: 1,
                        borderTopColor: '#c3c3c3',
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: '#c3c3c3',
                        margin: 10
                    }}
                    rightIcon={{
                        name: 'chevron-right',
                        iconStyle: {
                            color: '#e5006d'
                        }
                    }}
                    titleStyle={{
                        fontWeight: 'bold'
                    }}
                    subtitleStyle={{
                        color: '#A7ADBA',
                        fontSize: 12
                    }}
                />
            </View>
        );
    }

    render() {
        return (
            <View>
                {this.props.autoFidbacks.length > 0 && (
                    <ScrollView>
                        <FlatList
                            data={this.props.autoFidbacks}
                            renderItem={this.renderRow}
                            keyExtractor={item => item.uuid}
                            onRefresh={() => this.fetchAutoFidbacks('')}
                            refreshing={this.props.isAutoFidbacksFetchLoading ? this.props.isAutoFidbacksFetchLoading : false}
                        />
                    </ScrollView>
                )}
                {this.props.autoFidbacks.length === 0 && (
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                onRefresh={() => this.fetchAutoFidbacks('')}
                                refreshing={this.props.isAutoFidbacksFetchLoading ? this.props.isAutoFidbacksFetchLoading : false}
                            />
                        }
                    >
                        <View style={styles.noFidbacksWrapper}>
                            <Text style={styles.noFidbacksText}>Δεν υπάρχουν προς το παρόν διαθέσιμα FidBacks</Text>
                        </View>
                    </ScrollView>
                )}
            </View>

        );
    }
}

AutoFidbackView.propTypes = {
    openAutoFidback: PropTypes.func,
    fetchAutoFidbacks: PropTypes.func,
    autoFidbacks: PropTypes.array,
    isAutoFidbacksFetchLoading: PropTypes.bool,
    isAutoFidbackFetchLoading: PropTypes.bool,
    nextPageUrl: PropTypes.string
};

export default AutoFidbackView;
