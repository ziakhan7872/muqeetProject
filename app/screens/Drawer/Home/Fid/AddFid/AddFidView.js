import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    requestMultiple,
    checkMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';
import {
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    Dimensions,
    Image,
    Alert,
    Platform,
} from 'react-native';
import { Button, Slider, Input } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';
import styles from './styles';
import AppStyles from 'app/config/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImagePicker from 'react-native-image-picker';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import ModalSelector from 'react-native-modal-selector';
import ApiConstants from 'app/api/ApiConstants';

// import {AlertHelper} from 'app/utils/AlertHelper';

class AddFidView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emotionId: '',
            parentEmotionId: '',
            strength: 50,
            comment: '',
            bodyReactions: [],
            parentSubject: null,
            subjects: [],
            childrenSubjects: [],
            location: '',
            selectedEmotionLabel: '',
            imageId: null,
            image: require('../../../../../../assets/images/placeholder.png'),
            placeholderImage: require('../../../../../../assets/images/placeholder.png'),
            currentStep: 1,
            maxSteps: 2,
            selectedSlice: {
                label: '',
                value: 0,
            },
            labelWidth: 0,
            canSave: true,
            isLocationOverlayVisible: false,
            primaryEmotions: [
                {
                    key: 6,
                    label: 'Εμπιστοσύνη',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#A5DE00',
                    svg: { fill: '#A5DE00' },
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    onPress: () => this.selectEmotion(6, 'Εμπιστοσύνη'),
                },
                {
                    key: 3,
                    label: 'Φόβος',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#A52A2A',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#A52A2A' },
                    onPress: () => this.selectEmotion(3, 'Φόβος'),
                },
                {
                    key: 5,
                    label: 'Έκπληξη',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#32D1D5',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#32D1D5' },
                    onPress: () => this.selectEmotion(5, 'Έκπληξη'),
                },
                {
                    key: 1,
                    label: 'Λύπη',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#3584CA',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#3584CA' },
                    onPress: () => this.selectEmotion(1, 'Λύπη'),
                },
                {
                    key: 8,
                    label: 'Αηδία',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#D665FF',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#D665FF' },
                    onPress: () => this.selectEmotion(8, 'Αηδία'),
                },
                {
                    key: 4,
                    label: 'Θυμός',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#EA3153',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#EA3153' },
                    onPress: () => this.selectEmotion(4, 'Θυμός'),
                },
                {
                    key: 7,
                    label: 'Προσδοκία',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#FDA939',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#FDA939' },
                    onPress: () => this.selectEmotion(7, 'Προσδοκία'),
                },
                {
                    key: 2,
                    label: 'Χαρά',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#e5e500',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#e5e500' },
                    onPress: () => this.selectEmotion(2, 'Χαρά'),
                },
            ],
        };

        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    componentDidMount() {
        // if (this.props && this.props.secondaryEmotions.length === 0) {
        this.getSecondaryEmotions();
        // }
    }

    resetState = () => {
        this.setState({
            emotionId: '',
            parentEmotionId: '',
            strength: 50,
            comment: '',
            bodyReactions: [],
            parentSubject: null,
            subjects: [],
            childrenSubjects: [],
            location: '',
            selectedEmotionLabel: '',
            imageId: null,
            image: require('../../../../../../assets/images/placeholder.png'),
            currentStep: 1,
            maxSteps: 2,
            selectedSlice: {
                label: '',
                value: 0,
            },
            labelWidth: 0,
            canSave: true,
            isLocationOverlayVisible: false,
            primaryEmotions: [
                {
                    key: 6,
                    label: 'Εμπιστοσύνη',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#A5DE00',
                    svg: { fill: '#A5DE00' },
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    onPress: () => this.selectEmotion(6, 'Εμπιστοσύνη'),
                },
                {
                    key: 3,
                    label: 'Φόβος',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#A52A2A',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#A52A2A' },
                    onPress: () => this.selectEmotion(3, 'Φόβος'),
                },
                {
                    key: 5,
                    label: 'Έκπληξη',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#32D1D5',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#32D1D5' },
                    onPress: () => this.selectEmotion(5, 'Έκπληξη'),
                },
                {
                    key: 1,
                    label: 'Λύπη',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#3584CA',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#3584CA' },
                    onPress: () => this.selectEmotion(1, 'Λύπη'),
                },
                {
                    key: 8,
                    label: 'Αηδία',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#D665FF',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#D665FF' },
                    onPress: () => this.selectEmotion(8, 'Αηδία'),
                },
                {
                    key: 4,
                    label: 'Θυμός',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#EA3153',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#EA3153' },
                    onPress: () => this.selectEmotion(4, 'Θυμός'),
                },
                {
                    key: 7,
                    label: 'Προσδοκία',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#FDA939',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#FDA939' },
                    onPress: () => this.selectEmotion(7, 'Προσδοκία'),
                },
                {
                    key: 2,
                    label: 'Χαρά',
                    amount: 1 / 8,
                    deselectedColor: '#999999',
                    selectedColor: '#e5e500',
                    textRotation: { rotation: 0, originX: 0, originY: 0 },
                    // arc: { padAngle: 0 },
                    svg: { fill: '#e5e500' },
                    onPress: () => this.selectEmotion(2, 'Χαρά'),
                },
            ],
        });
    };

    nextStep = () => {
        if (this.state.currentStep < this.state.maxSteps) {
            this.props.fetchSubjects();
            this.props.fetchBodyReactions(this.state.emotionId);
            this.setState({ currentStep: this.state.currentStep + 1 });
            this.ScrollView.scrollTo({ y: 0 });
        }
    };

    previousStep = () => {
        this.ScrollView.scrollTo({ y: 0 });
        if (this.state.currentStep > 1) {
            this.setState({ currentStep: this.state.currentStep - 1 });
        }
    };

    save() {
        const {
            emotionId,
            strength,
            comment,
            bodyReactions,
            imageId,
            subjects,
            location,
        } = this.state;

        const fid = {
            emotion_id: emotionId,
            image_id: imageId,
            strength: strength,
            comment: comment,
            body_reaction: bodyReactions,
            subjects: subjects,
            location: location,
        };

        this.props.storeFid(fid);
        this.resetState();
    }

    handlePermissionsStatuses = (permissionStatuses, permissions) => {
        const reason = 'Η εφαρμογή δεν έχει πρόσβαση στις φωτογραφίες σας.';
        permissions.forEach((permission) => {
            switch (permissionStatuses[permission]) {
            case RESULTS.UNAVAILABLE:
                return { result: false, reason };
                break;
            case RESULTS.DENIED:
                return { result: false, reason };
                break;
            case RESULTS.GRANTED:
                break;
            case RESULTS.BLOCKED:
                return { result: false, reason };
                break;
            }
        });
        return { result: true, reason: null };
    };

    showImagePicker() {
        let permissions = [];
        if (Platform.OS === 'android') {
            permissions = [
                PERMISSIONS.ANDROID.CAMERA,
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            ];
        } else if (Platform.OS === 'ios') {
            permissions = [
                PERMISSIONS.IOS.CAMERA,
                PERMISSIONS.IOS.PHOTO_LIBRARY,
            ];
        } else {
            throw new Error('Unknown Platform');
        }

        requestMultiple(permissions).then((statuses) => {
            const { result, reason } = this.handlePermissionsStatuses(
                statuses,
                permissions
            );

            if (result) {
                this.openImagePicker();
            } else {
                Alert.alert(
                    'Κάτι πήγε στραβά!',
                    reason,
                    [{ text: 'ΕΝΤΑΞΕΙ' }],
                    { cancelable: false }
                );
            }
        });
    }

    openImagePicker() {
        const initialOptions = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        const additionalIosOptions = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
                cameraRoll: true,
                waitUntilSaved: true,
            },
        };

        const options =
            Platform.OS === 'android'
                ? { ...initialOptions }
                : { ...initialOptions, ...additionalIosOptions };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
                Alert.alert(
                    'Κάτι πήγε στραβά!',
                    'Η εφαρμογή δεν έχει δικαίωμα πρόσβασης στις φωτογραφίες σας.',
                    [{ text: 'ΕΝΤΑΞΕΙ' }],
                    { cancelable: false }
                );
            } else {
                const responseUri =
                    Platform.OS === 'android'
                        ? response.uri
                        : response.uri.replace('file://', '');
                let source = { uri: responseUri };
                this.setState({
                    image: source,
                });

                this.setState({ canSave: false }, () => {
                    const imageInput = {
                        uri: responseUri,
                        type: response.type,
                        size: response.fileSize,
                        name: response.fileName,
                    };

                    let form = new FormData();
                    form.append('image', imageInput, response.fileName);
                    fetch(ApiConstants.BASE_URL + ApiConstants.IMAGE, {
                        body: form,
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                            Authorization: 'Bearer ' + this.props.token,
                        },
                    })
                        .then((response) => response.json())
                        .catch(() => {
                            // AlertHelper.show('error', 'Κάτι πήγε στραβά!', 'Έλεγξε τη σύνδεσή σου στο Internet.');
                            Alert.alert(
                                'Κάτι πήγε στραβά!',
                                'Έλεγξε τη σύνδεσή σου στο Internet.',
                                [{ text: 'ΕΝΤΑΞΕΙ' }],
                                { cancelable: false }
                            );
                            this.setState(
                                (previousState, props) => {
                                    return {
                                        image: previousState.placeholderImage,
                                    };
                                },
                                () => {
                                    this.setState({ canSave: true });
                                }
                            );
                        })
                        .then((responseData) => {
                            if (
                                responseData &&
                                responseData.status === 'success'
                            ) {
                                this.setState(
                                    { imageId: responseData.image_id },
                                    () => {
                                        this.setState({ canSave: true });
                                    }
                                );
                            } else {
                                Alert.alert(
                                    'Κάτι πήγε στραβά!',
                                    'Κάτι πήγε στραβά κατά το ανέβασμα της φωτογραφίας.',
                                    [{ text: 'ΕΝΤΑΞΕΙ' }],
                                    { cancelable: false }
                                );
                                this.setState(
                                    (previousState, props) => {
                                        return {
                                            image:
                                                previousState.placeholderImage,
                                        };
                                    },
                                    () => {
                                        this.setState({ canSave: true });
                                    }
                                );
                            }
                        })
                        .catch((error) => {})
                        .done();
                });
            }
        });
    }

    getSecondaryEmotions() {
        this.props.fetchSecondaryEmotions(this.state.emotionId);
    }

    selectEmotion(emotionId, selectedEmotionLabel) {
        this.setState(
            {
                emotionId: emotionId,
                parentEmotionId: emotionId,
                selectedEmotionLabel: selectedEmotionLabel,
            },
            () => {
                this.setState({
                    primaryEmotions: this.formatPrimaryEmotions(emotionId),
                });
            }
        );
    }

    formatPrimaryEmotions = (emotionId) => {
        return this.state.primaryEmotions.map((primaryEmotion) => {
            if (primaryEmotion.key === emotionId) {
                return {
                    ...primaryEmotion,
                    svg: { fill: primaryEmotion.selectedColor },
                };
            } else {
                return {
                    ...primaryEmotion,
                    svg: { fill: primaryEmotion.deselectedColor },
                };
            }
        });
    };

    formatSecondaryEmotions = (emotionId) => {
        if (this.props.secondaryEmotions[emotionId]) {
            return this.props.secondaryEmotions[emotionId].map(
                (secondaryEmotion) => {
                    return {
                        key: secondaryEmotion.id,
                        label: secondaryEmotion.name,
                        parent: secondaryEmotion.parent,
                    };
                }
            );
        }
    };

    onBodyReactionSelect = (selectedItems) => {
        this.setState({ bodyReactions: selectedItems });
    };

    onParentSubjectSelect = (selectedItems) => {
        this.setState({ subjects: [] }, () => {
            this.setState({ parentSubject: selectedItems[0] }, () => {
                this.setState({
                    childrenSubjects: [
                        {
                            name: 'Θέματα',
                            id: 0,
                            children: this.props.childrenSubjects[
                                this.state.parentSubject
                            ],
                        },
                    ],
                });
            });
        });
    };

    onSubjectSelect = (selectedItems) => {
        this.setState({ subjects: selectedItems });
    };

    render() {
        const {
            emotionId,
            parentEmotionId,
            strength,
            comment,
            image,
            location,
            currentStep,
            maxSteps,
            labelWidth,
            selectedEmotionLabel,
            canSave,
            primaryEmotions,
            parentSubject,
            subjects,
            childrenSubjects,
        } = this.state;

        const Labels = ({ slices }) => {
            return slices.map((slice, index) => {
                const { pieCentroid, data } = slice;
                return (
                    <SvgText
                        key={index}
                        x={pieCentroid[0]}
                        y={pieCentroid[1]}
                        fill={AppStyles.color.COLOR_WHITE}
                        textAnchor={'middle'}
                        alignmentBaseline={'bottom'}
                        fontSize={12}
                        transform={data.textRotation}
                    >
                        {data.label}
                    </SvgText>
                );
            });
        };

        const deviceWidth = Dimensions.get('window').width;

        return (
            <SafeAreaView>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    ref={(ref) => (this.ScrollView = ref)}
                >
                    <View
                        style={{
                            paddingBottom: 25,
                        }}
                    >
                        {currentStep === 1 && (
                            <View style={styles.container}>
                                {/*<Text style={styles.header}>Τι νιώθεις;</Text>*/}
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        flex: 1,
                                    }}
                                >
                                    <PieChart
                                        style={styles.pieChart}
                                        valueAccessor={({ item }) =>
                                            item.amount
                                        }
                                        data={primaryEmotions}
                                        innerRadius={'45%'}
                                        outerRadius={'85%'}
                                    >
                                        <Labels />
                                    </PieChart>

                                    <Text
                                        onLayout={({
                                            nativeEvent: {
                                                layout: { width },
                                            },
                                        }) => {
                                            this.setState({
                                                labelWidth: width + 10,
                                            });
                                        }}
                                        style={{
                                            position: 'absolute',
                                            left:
                                                deviceWidth / 2 -
                                                labelWidth / 2,
                                            margin: 5,
                                            textAlign: 'left',
                                            fontSize: 20,
                                        }}
                                    >
                                        {`${selectedEmotionLabel}`}
                                    </Text>
                                </View>
                                <View style={styles.strengthContainer}>
                                    {/* {emotionId !== '' && (
                                        <Icon
                                            name="arrow-down"
                                            type="font-awesome"
                                            backgroundColor="transparent"
                                            color={AppStyles.color.COLOR_PRIMARY}
                                            size={30}
                                        >
                                        </Icon>
                                    )} */}
                                    {parentEmotionId !== '' &&
                                        !this.props
                                            .isFetchSecondaryEmotionsLoading && (
                                        <ModalSelector
                                            disabled={
                                                this.props
                                                    .isFetchSecondaryEmotionsLoading
                                            }
                                            data={this.formatSecondaryEmotions(
                                                parentEmotionId
                                            )}
                                            initValue="Νιώθεις κάποιο πιο ιδιαίτερο συναίσθημα;"
                                            cancelText="Ακύρωση"
                                            style={{
                                                paddingBottom: 20,
                                            }}
                                            selectStyle={styles.selectStyle}
                                            selectTextStyle={{
                                                color: '#7a7a7a',
                                                fontSize: 18,
                                            }}
                                            optionContainerStyle={{
                                                backgroundColor:
                                                        AppStyles.color
                                                            .COLOR_WHITE,
                                            }}
                                            optionTextStyle={{
                                                color: '#444',
                                                textAlign: 'left',
                                            }}
                                            cancelStyle={{
                                                backgroundColor:
                                                        AppStyles.color
                                                            .COLOR_PRIMARY,
                                            }}
                                            cancelTextStyle={{
                                                color:
                                                        AppStyles.color
                                                            .COLOR_WHITE,
                                            }}
                                            onChange={(option) => {
                                                this.setState({
                                                    emotionId: option.key,
                                                    parentEmotionId:
                                                            option.parent,
                                                    selectedEmotionLabel:
                                                            option.label,
                                                });
                                            }}
                                        />
                                    )}
                                </View>
                                <View style={styles.strengthContainer}>
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            paddingBottom: 10,
                                            fontSize: 18,
                                        }}
                                    >
                                        Πόσο έντονο ήταν το συναίσθημά σου;
                                    </Text>
                                    <Text
                                        style={{
                                            width: 50,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                            color:
                                                AppStyles.color.COLOR_PRIMARY,
                                            left:
                                                (strength *
                                                    (deviceWidth - 60)) /
                                                    100 -
                                                15,
                                        }}
                                    >
                                        {strength}%
                                    </Text>
                                    <Slider
                                        animateTransitions={true}
                                        value={strength}
                                        minimumValue={1}
                                        maximumValue={100}
                                        step={1}
                                        minimumTrackTintColor={
                                            AppStyles.color.COLOR_PRIMARY
                                        }
                                        thumbTintColor={
                                            AppStyles.color.COLOR_PRIMARY
                                        }
                                        onValueChange={(strength) => {
                                            clearTimeout(this.sliderTimeoutId);
                                            this.sliderTimeoutId = setTimeout(
                                                () => {
                                                    this.setState({ strength });
                                                },
                                                0
                                            );
                                        }}
                                    />
                                    <View style={styles.inline}>
                                        <Text>Αδύναμο</Text>
                                        <Text>Μέτριο</Text>
                                        <Text>Δυνατό</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        {currentStep === 2 && (
                            <View>
                                <View
                                    style={{
                                        backgroundColor: '#ffffff',
                                        padding: 8,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                AppStyles.color.COLOR_PRIMARY,
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            padding: 10,
                                        }}
                                    >
                                        Τι συνέβη; Γράψε το γεγονός ή τη σκέψη
                                        σου
                                    </Text>
                                    <Input
                                        multiline={true}
                                        numberOfLines={3}
                                        placeholder={
                                            'Πληκτρολόγησε λίγα λόγια για το γεγονός...'
                                        }
                                        onChangeText={(comment) =>
                                            this.setState({ comment })
                                        }
                                        value={comment}
                                        inputContainerStyle={
                                            styles.inputContainerStyle
                                        }
                                        inputStyle={styles.inputStyle}
                                    />
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#ffffff',
                                        padding: 8,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                AppStyles.color.COLOR_PRIMARY,
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            padding: 10,
                                        }}
                                    >
                                        Που βρίσκεσαι;
                                    </Text>
                                    <Input
                                        onChangeText={(location) =>
                                            this.setState({ location })
                                        }
                                        value={location}
                                        placeholder="π.χ σπίτι, δρόμο, δουλειά κτλ"
                                        inputContainerStyle={
                                            styles.inputContainerStyle
                                        }
                                        inputStyle={styles.inputStyle}
                                    />
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#ffffff',
                                        marginBottom: 10,
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                        paddingBottom: 0,
                                        paddingTop: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                AppStyles.color.COLOR_PRIMARY,
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            padding: 10,
                                        }}
                                    >
                                        Είχες κάποιο σωματικό σύμπτωμα;
                                    </Text>
                                    <SectionedMultiSelect
                                        loading={
                                            this.props
                                                .isFetchBodyReactionsLoading
                                        }
                                        items={[
                                            {
                                                name: 'Σωματικό Σύμπτωμα',
                                                id: 0,
                                                children: this.props
                                                    .bodyReactions,
                                            },
                                        ]}
                                        uniqueKey="id"
                                        subKey="children"
                                        selectText="-- Επιλέξτε --"
                                        confirmText="Υποβολή"
                                        hideSearch={true}
                                        showCancelButton={true}
                                        readOnlyHeadings={true}
                                        alwaysShowSelectText={true}
                                        expandDropDowns={true}
                                        onSelectedItemsChange={
                                            this.onBodyReactionSelect
                                        }
                                        selectedItems={this.state.bodyReactions}
                                        styles={{
                                            selectToggle: {
                                                borderWidth: 1,
                                                borderColor: '#E4E4E4',
                                                padding: 10,
                                                marginLeft: 10,
                                                marginRight: 10,
                                                marginBottom: 10,
                                            },
                                            selectToggleText: {
                                                fontSize: 14,
                                            },
                                            subItemText: {
                                                textTransform: 'capitalize',
                                            },
                                        }}
                                        colors={{
                                            primary:
                                                AppStyles.color.COLOR_PRIMARY,
                                            chipColor:
                                                AppStyles.color.COLOR_PRIMARY,
                                            success:
                                                AppStyles.color.COLOR_PRIMARY,
                                            disabled:
                                                AppStyles.color.COLOR_PRIMARY,
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#ffffff',
                                        marginBottom: 10,
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                        paddingBottom: 0,
                                        paddingTop: 0,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:
                                                AppStyles.color.COLOR_PRIMARY,
                                            fontWeight: 'bold',
                                            fontSize: 15,
                                            padding: 10,
                                        }}
                                    >
                                        Κύρια Θέματα
                                    </Text>
                                    <SectionedMultiSelect
                                        loading={
                                            this.props.isFetchSubjectsLoading
                                        }
                                        items={[
                                            {
                                                name: 'Κύρια Θέματα',
                                                id: 0,
                                                children: this.props
                                                    .parentSubjects,
                                            },
                                        ]}
                                        uniqueKey="id"
                                        subKey="children"
                                        selectText="-- Επιλέξτε --"
                                        confirmText="Υποβολή"
                                        single={true}
                                        hideSearch={true}
                                        showCancelButton={true}
                                        readOnlyHeadings={true}
                                        expandDropDowns={true}
                                        alwaysShowSelectText={false}
                                        onSelectedItemsChange={
                                            this.onParentSubjectSelect
                                        }
                                        selectedItems={[parentSubject]}
                                        styles={{
                                            selectToggle: {
                                                borderWidth: 1,
                                                borderColor: '#E4E4E4',
                                                padding: 10,
                                                marginLeft: 10,
                                                marginRight: 10,
                                                marginBottom: 10,
                                            },
                                            selectToggleText: {
                                                fontSize: 14,
                                            },
                                            subItemText: {
                                                textTransform: 'capitalize',
                                            },
                                        }}
                                        colors={{
                                            primary:
                                                AppStyles.color.COLOR_PRIMARY,
                                            chipColor:
                                                AppStyles.color.COLOR_PRIMARY,
                                            success:
                                                AppStyles.color.COLOR_PRIMARY,
                                            disabled:
                                                AppStyles.color.COLOR_PRIMARY,
                                        }}
                                    />
                                </View>
                                {childrenSubjects.length > 0 && (
                                    <View
                                        style={{
                                            backgroundColor: '#ffffff',
                                            marginBottom: 10,
                                            paddingLeft: 8,
                                            paddingRight: 8,
                                            paddingBottom: 0,
                                            paddingTop: 0,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color:
                                                    AppStyles.color
                                                        .COLOR_PRIMARY,
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                padding: 10,
                                            }}
                                        >
                                            Θέματα
                                        </Text>
                                        <SectionedMultiSelect
                                            loading={
                                                this.props
                                                    .isFetchSubjectsLoading
                                            }
                                            items={childrenSubjects}
                                            uniqueKey="id"
                                            subKey="children"
                                            selectText="-- Επιλέξτε --"
                                            confirmText="Υποβολή"
                                            hideSearch={true}
                                            showCancelButton={true}
                                            alwaysShowSelectText={true}
                                            readOnlyHeadings={true}
                                            expandDropDowns={true}
                                            onSelectedItemsChange={
                                                this.onSubjectSelect
                                            }
                                            selectedItems={subjects}
                                            styles={{
                                                selectToggle: {
                                                    borderWidth: 1,
                                                    borderColor: '#E4E4E4',
                                                    padding: 10,
                                                    marginLeft: 10,
                                                    marginRight: 10,
                                                    marginBottom: 10,
                                                },
                                                selectToggleText: {
                                                    fontSize: 14,
                                                },
                                                subItemText: {
                                                    textTransform: 'capitalize',
                                                },
                                            }}
                                            colors={{
                                                primary:
                                                    AppStyles.color
                                                        .COLOR_PRIMARY,
                                                chipColor:
                                                    AppStyles.color
                                                        .COLOR_PRIMARY,
                                                success:
                                                    AppStyles.color
                                                        .COLOR_PRIMARY,
                                                disabled:
                                                    AppStyles.color
                                                        .COLOR_PRIMARY,
                                            }}
                                        />
                                    </View>
                                )}
                                {Platform.OS === 'android' && (
                                    <View style={styles.imageContainer}>
                                        <Text
                                            style={{
                                                color:
                                                    AppStyles.color.COLOR_PRIMARY,
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                padding: 10,
                                                textAlign: 'left',
                                            }}
                                        >
                                            Επιλέξτε Φωτογραφία
                                        </Text>
                                        <TouchableOpacity
                                            onPress={this.showImagePicker.bind(
                                                this
                                            )}
                                        >
                                            <View
                                                style={[
                                                    styles.avatar,
                                                    styles.avatarContainer,
                                                    { marginBottom: 20 },
                                                ]}
                                            >
                                                <Image
                                                    style={styles.avatar}
                                                    source={image}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        )}
                        <View style={styles.buttonWrapper}>
                            {currentStep < maxSteps && (
                                <View>
                                    <Button
                                        containerStyle={styles.buttonContainer}
                                        title="Επόμενο βήμα"
                                        buttonStyle={styles.nextButton}
                                        onPress={() => this.nextStep()}
                                        disabled={emotionId === ''}
                                    />
                                </View>
                            )}
                            {currentStep === maxSteps && (
                                <Button
                                    containerStyle={styles.buttonContainer}
                                    title="Αποθήκευση"
                                    buttonStyle={styles.saveButton}
                                    onPress={() => this.save()}
                                    raised
                                    loading={this.props.isStoreFidLoading}
                                    disabled={
                                        this.props.isStoreFidLoading || !canSave
                                    }
                                />
                            )}
                            {currentStep > 1 && (
                                <Button
                                    containerStyle={styles.buttonContainer}
                                    title="Προηγούμενο βήμα"
                                    buttonStyle={styles.previousButton}
                                    titleStyle={styles.previousButtonText}
                                    onPress={() => this.previousStep()}
                                    type="clear"
                                />
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

AddFidView.propTypes = {
    storeFid: PropTypes.func,
    fetchBodyReactions: PropTypes.func,
    fetchSubjects: PropTypes.func,
    parentSubjects: PropTypes.array,
    childrenSubjects: PropTypes.object,
    bodyReactions: PropTypes.array,
    isStoreFidLoading: PropTypes.bool,
    token: PropTypes.string,
    fetchSecondaryEmotions: PropTypes.func,
    secondaryEmotions: PropTypes.object,
    isFetchSecondaryEmotionsLoading: PropTypes.bool,
    isFetchSubjectsLoading: PropTypes.bool,
    isFetchBodyReactionsLoading: PropTypes.bool,
};

export default AddFidView;
