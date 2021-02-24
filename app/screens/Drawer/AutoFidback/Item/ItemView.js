import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, InteractionManager, ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button, ListItem, Input, Divider, Card} from 'react-native-elements';
import {BarChart, YAxis} from 'react-native-svg-charts';
import {Text as SvgText} from 'react-native-svg';
import * as scale from 'd3-scale';
import styles from './styles';
import AppStyles from 'app/config/styles';

class ItemView extends Component {
    constructor(props) {
        super(props);
        this._goBack = this._goBack.bind(this);
        this.storeAutoFidbackNote = this.storeAutoFidbackNote.bind(this);
        this.getGridMax = this.getGridMax.bind(this);

        this.state = {
            isReady: false,
            autoFidbackNote: ''
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

    storeAutoFidbackNote() {
        const {autoFidbackNote} = this.state;
        this.props.storeAutoFidbackNote(autoFidbackNote, this.props.autoFidback.uuid);
    }

    getGridMax() {
        let gridMax = 20;
        if (this.props.autoFidback && this.props.autoFidback.emotion_analytics) {
            let maxCount = Math.max.apply(Math, this.props.autoFidback.emotion_analytics.map(function (o) {
                return o.count;
            }));
            gridMax = (Math.ceil(maxCount / 5) * 5) + 1;
        }
        return gridMax;
    }

    render() {
        const {autoFidbackNote} = this.state;

        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                color={AppStyles.color.COLOR_PRIMARY}/>;
        }

        const CUT_OFF = 50;
        const Labels = ({x, y, bandwidth, data}) => (
            data.map((value, index) => (
                <SvgText
                    key={index}
                    x={value.count > CUT_OFF ? x(0) + 10 : x(value.count) + 10}
                    y={y(index) + (bandwidth / 2)}
                    fontSize={14}
                    fill={value.count > CUT_OFF ? 'white' : 'black'}
                    alignmentBaseline={'middle'}
                >
                    {value.count}
                </SvgText>
            ))
        );

        return (

            <SafeAreaView>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.header}>FiDback</Text>
                    <Divider style={styles.divider}/>
                    <Card title='Περίοδος καταγραφής'
                        containerStyle={{
                            borderColor: 'rgba(227, 227, 227, 0.2)',
                            borderWidth: 1,
                            backgroundColor: '#FBFBFB'
                        }}
                        dividerStyle={{
                            borderBottomColor: '#e3e3e3',
                            borderBottomWidth: 1
                        }}
                        titleStyle={{
                            textAlign: 'left',
                            color: '#909497'
                        }}>
                        <View>
                            <Text style={styles.dateHeader}>{this.props.autoFidback.date_range}</Text>
                        </View>
                    </Card>

                    <Card title='Κυρίαρχο συναίσθημα'
                        containerStyle={{
                            borderColor: 'rgba(210, 180, 222, 0.2)',
                            borderWidth: 1,
                            backgroundColor: '#FBFBFB'
                        }}
                        dividerStyle={{
                            borderBottomColor: '#D2B4DE',
                            borderBottomWidth: 1
                        }}
                        titleStyle={{
                            textAlign: 'left',
                            color: '#909497'
                        }}>
                        <View>
                            <Text style={styles.titleHeader}>{this.props.autoFidback.emotion.name}</Text>
                            <Text style={{marginBottom: 10}}>Ένταση κυρίαρχου
                                συναισθήματος: {this.props.autoFidback.emotion_mean_strength}%</Text>
                        </View>
                    </Card>

                    {this.props.autoFidback && this.props.autoFidback.emotion_analytics.length > 0 && (
                        <Card title='Διάγραμμα Συναισθημάτων'
                            containerStyle={{
                                borderColor: 'rgba(227, 227, 227, 0.2)',
                                borderWidth: 1,
                                backgroundColor: '#FBFBFB'
                            }}
                            dividerStyle={{
                                borderBottomColor: '#e3e3e3',
                                borderBottomWidth: 1
                            }}
                            titleStyle={{
                                textAlign: 'left',
                                color: '#909497'
                            }}>
                            <View style={{flexDirection: 'row', height: 200, paddingTop: 10, paddingLeft: 0}}>
                                <YAxis
                                    data={this.props.autoFidback.emotion_analytics}
                                    yAccessor={({index}) => index}
                                    scale={scale.scaleBand}
                                    contentInset={{top: 10, bottom: 10}}
                                    spacing={0.2}
                                    formatLabel={(_, index) => this.props.autoFidback.emotion_analytics[index].emotion_name}
                                />
                                <BarChart
                                    data={this.props.autoFidback.emotion_analytics}
                                    gridMin={0}
                                    gridMax={this.getGridMax()}
                                    contentInset={{top: 10, bottom: 10}}
                                    svg={{fill: 'rgba(255, 164, 176, 0.8)'}}
                                    yAccessor={({item}) => item.count}
                                    style={{flex: 1}}
                                    horizontal={true}
                                    spacing={0.2}
                                >
                                    <Labels/>
                                </BarChart>
                            </View>
                        </Card>
                    )}

                    {this.props.autoFidback && this.props.autoFidback.body_reaction !== null && (
                        <View>
                            <Card title='Κυρίαρχες σωματικές αντιδράσεις'
                                containerStyle={{
                                    borderColor: 'rgba(227, 227, 227, 0.2)',
                                    borderWidth: 1,
                                    backgroundColor: '#FBFBFB'
                                }}
                                dividerStyle={{
                                    borderBottomColor: '#e3e3e3',
                                    borderBottomWidth: 1
                                }}
                                titleStyle={{
                                    textAlign: 'left',
                                    color: '#909497'
                                }}>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    paddingLeft: 10,
                                    borderLeftWidth: 3,
                                    borderLeftColor: 'rgba(255, 164, 176, 0.8)'
                                }}>
                                    <Text style={styles.hashTag}>{this.props.autoFidback.body_reaction.name}</Text>
                                </View>
                            </Card>
                        </View>
                    )}
                    {this.props.autoFidback && this.props.autoFidback.subjects && this.props.autoFidback.subjects.length > 0 && (
                        <View style={{
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Card title='Θέματα'
                                containerStyle={{
                                    borderColor: 'rgba(227, 227, 227, 0.2)',
                                    borderWidth: 1,
                                    backgroundColor: '#FBFBFB'
                                }}
                                dividerStyle={{
                                    borderBottomColor: '#e3e3e3',
                                    borderBottomWidth: 1
                                }}
                                titleStyle={{
                                    textAlign: 'left',
                                    color: '#909497'
                                }}>
                                <View style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                    paddingLeft: 10,
                                    borderLeftWidth: 3,
                                    borderLeftColor: 'rgba(255, 164, 176, 0.8)'
                                }}>
                                    {
                                        this.props.autoFidback.subjects.map((subject, index) => (
                                            <View key={index}>
                                                <Text style={styles.hashTag}>{index + 1}. {subject.name}</Text>
                                            </View>
                                        ))
                                    }
                                </View>
                            </Card>
                        </View>
                    )}
                    {this.props.autoFidback && this.props.autoFidback.auto_fidback_text && (

                        <View style={{
                            marginTop: 10,
                            marginBottom: 10
                        }}>
                            <Card title='Συναισθηματική Αποτύπωση'
                                containerStyle={{
                                    borderColor: 'rgba(0, 115, 247, 0.2)',
                                    borderWidth: 1
                                }}
                                dividerStyle={{
                                    borderBottomColor: '#0073f7',
                                    borderBottomWidth: 1
                                }}
                                titleStyle={{
                                    textAlign: 'left',
                                    color: '#0073f7'
                                }}>
                                <Text
                                    style={{marginBottom: 10}}>{this.props.autoFidback.auto_fidback_text.emotional_impression}</Text>
                            </Card>
                        </View>
                    )}
                    {this.props.autoFidback.auto_fidback_text && (
                        <View style={{
                            marginTop: 10,
                            marginBottom: 10,
                        }}>
                            <Card title='Αυτοβοήθεια'
                                containerStyle={{
                                    borderColor: 'rgba(70, 136, 71, 0.2)',
                                    borderWidth: 1
                                }}
                                dividerStyle={{
                                    borderBottomColor: '#468847',
                                    borderBottomWidth: 1
                                }}
                                titleStyle={{
                                    textAlign: 'left',
                                    color: '#468847'
                                }}>
                                <Text
                                    style={{marginBottom: 10}}>{this.props.autoFidback.auto_fidback_text.self_help_technique}</Text>
                            </Card>
                        </View>
                    )}
                    {this.props.autoFidback.note && (
                        <View style={{
                            marginBottom: 5
                        }}>
                            <Card title='Προσωπικές Σημειώσεις'
                                containerStyle={{
                                    borderColor: 'rgba(227, 227, 227, 0.2)',
                                    borderWidth: 1,
                                    backgroundColor: '#FBFBFB'
                                }}
                                dividerStyle={{
                                    borderBottomColor: '#e3e3e3',
                                    borderBottomWidth: 1
                                }}
                                titleStyle={{
                                    textAlign: 'left',
                                    color: '#909497'
                                }}>
                                <View>
                                    <Text>{this.props.autoFidback.note.note}</Text>
                                </View>
                            </Card>
                        </View>
                    )}
                    {!this.props.autoFidback.note && (
                        <View>
                            <Input
                                multiline={true}
                                numberOfLines={3}
                                label={'Προσωπική σημείωση'}
                                labelStyle={{
                                    color: AppStyles.color.COLOR_PRIMARY,
                                    marginBottom: 5
                                }}
                                containerStyle={{
                                    marginLeft: 5,
                                    marginRight: 0
                                }}
                                inputContainerStyle={{
                                    borderColor: '#E4E4E4',
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    marginBottom: 10,
                                    paddingTop: 0,
                                    marginRight: 10
                                }}
                                value={autoFidbackNote}
                                keyboardAppearance="light"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                ref={input => (this.autoFidbackNoteInput = input)}
                                onChangeText={autoFidbackNote => this.setState({autoFidbackNote})}
                            />
                            <Button
                                title="Αποθήκευση σημείωσης"
                                onPress={() => this.storeAutoFidbackNote()}
                                loading={this.props.isStoreAutofidbackNoteLoading}
                                disabled={this.props.isStoreAutofidbackNoteLoading}
                                buttonStyle={styles.storeButton}/>
                        </View>
                    )}
                    <View style={{paddingTop: 10}}>
                        <Button
                            title="Πίσω"
                            onPress={() => this._goBack()}
                            buttonStyle={styles.backButton}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

ItemView.propTypes = {
    autoFidback: PropTypes.object,
    storeAutoFidbackNote: PropTypes.func,
    isAutoFidbackFetchLoading: PropTypes.bool,
    isStoreAutofidbackNoteLoading: PropTypes.bool,
};

export default ItemView;
