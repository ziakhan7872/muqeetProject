/* eslint-disable no-console */
import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    InteractionManager,
    ActivityIndicator,
    TouchableHighlight,
    FlatList
} from 'react-native';
import {Card, Button, Icon, Image, Overlay} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';
import AppStyles from 'app/config/styles';
import ApiConstants from 'app/api/ApiConstants';

class CalendarItemView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            isVisible: false,
            imageInModal: null
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                isReady: true
            });
        });
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item}) => (
        <Card title={item.emotion.name} titleStyle={{
            textAlign: 'left',
            fontSize: 22,
            color: item.emotion.color
        }}>
            <View style={styles.user}>
                {item.strength && (
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}>
                        <Icon name='heartbeat' type='font-awesome' color='#c3c3c3'/>
                        <Text style={styles.main_title}>Ένταση συναισθήματος: {item.strength}</Text>
                    </View>
                )}
                {item.subjects && item.subjects.length > 0 && ( 
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}>
                        <Icon name='tags' type='font-awesome' color='#c3c3c3'/>
                        <Text style={styles.main_title}>Θέματα: {item.subjects.map(subject => subject.name).join(", ")}</Text>
                    </View>
                )}
                {item.body_reactions && item.body_reactions.length > 0 && ( 
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}>
                        <Icon name='tags' type='font-awesome' color='#c3c3c3'/>
                        <Text style={styles.main_title}>Σωματικές αντιδράσεις: {item.body_reactions.map(body_reaction => body_reaction.name).join(", ")}</Text>
                    </View>
                )}
                {item.comment !== '' && (
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}>
                        <Icon name='file-text' type='font-awesome' color='#c3c3c3'/>
                        <Text style={styles.main_title}>Περιγραφή γεγονότος: {item.comment}</Text>
                    </View>
                )}
                {item.location !== '' && (
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingBottom: 10,
                        paddingLeft: 5
                    }}>
                        <Icon name='map-marker' type='font-awesome' color='#c3c3c3'/>
                        <Text style={{paddingLeft: 15}}>Τοποθεσία: {item.location}</Text>
                    </View>
                )}
                {item.image && (
                    <TouchableHighlight
                        onPress={() => this.setState({imageInModal: ApiConstants.BASE_URL + 'storage/' + item.image.path}, () => {
                            this.setState({isVisible: true});
                        })}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            paddingBottom: 20
                        }}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{uri: ApiConstants.BASE_URL + 'storage/' + item.image.path}}
                                PlaceholderContent={<ActivityIndicator/>}
                            />
                        </View>
                    </TouchableHighlight>
                )}
            </View>
        </Card>
    );

    render() {
        const {isReady, isVisible, imageInModal} = this.state;
        if (!isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return (
            <SafeAreaView style={styles.container}>
                {this.props.fidsOfDay.length > 0 && (
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.props.fidsOfDay}
                        renderItem={this.renderItem}
                    />
                )}
                {this.props.fidsOfDay.length == 0 && (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{
                            marginBottom: 10,
                            fontSize: 16,
                            paddingLeft: 50,
                            paddingRight: 50,
                            textAlign: 'center'
                        }}>Δεν υπάρχουν καταχωρήσεις για αυτή την ημέρα.</Text>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            title="Πίσω"
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                )}
                <Overlay
                    isVisible={isVisible}
                    windowBackgroundColor="rgba(255, 255, 255, .5)"
                    height="auto"
                    onBackdropPress={() => this.setState({isVisible: false}, () => {
                        this.setState({imageInModal: null});
                    })}
                >
                    <Image
                        style={styles.modalImage}
                        resizeMode="cover"
                        source={{uri: imageInModal}}
                        PlaceholderContent={<ActivityIndicator/>}
                    />
                    <Button onPress={() => this.setState({isVisible: false}, () => {
                        this.setState({imageInModal: null});
                    })} title={'Κλείσιμο'} type="clear" titleStyle={{ color: AppStyles.color.COLOR_PRIMARY }}/>
                </Overlay>
            </SafeAreaView>
        );
    }
}

CalendarItemView.propTypes = {
    fidsOfDay: PropTypes.array,
};

export default CalendarItemView;