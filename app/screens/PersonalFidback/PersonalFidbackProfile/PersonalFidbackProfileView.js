import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, Text, ImageBackground} from 'react-native';
import AppStyles from 'app/config/styles';
import styles from './styles';
import {Button, Divider, Input, CheckBox} from 'react-native-elements';
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';

const BG_IMAGE = require('../../../../assets/images/bg_screen2.jpg');

class PersonalFidbackProfileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: [
                {id: 1, label: 'Κατάθλιψη'},
                {id: 2, label: 'Άγχος'},
                {id: 3, label: 'Οικογενειακές δυσκολίες'},
                {id: 4, label: 'Προβλήματα σχέσης'},
                {id: 5, label: 'Απώλεια και Πένθος'},
                {id: 6, label: 'Προβλήματα εθισμού'},
                {id: 7, label: 'Διατροφικές διαταραχές'},
                {id: 8, label: 'Κακοποίηση (Σωματική/Ψυχολογική)'},
                {id: 9, label: 'Προβλήματα με γονείς'},
                {id: 10, label: 'Θέματα αυτοεκτίμησης, κινητοποίησης και αυτοπεποίθησης'},
                {id: 11, label: 'Επαγγελματικά ζητήματα'},
                {id: 12, label: 'Σεξουαλική ταυτότητα'},
                {id: 13, label: 'COVID-19'},
            ],
            selectedSubjects: [],
            mentalIllness: '',
            hasMentalIllness: false,
            checked: false,
            chronicPain: '',
            hasChronicPain: false,
            previousTherapies: '',
            hasPreviousTherapies: false,
            medication: 'no',
            medicationDetails: '',
            dietEvaluation: 1,
            sleepEvaluation: 1,
            financialStatusEvaluation: 1,
            currentStep: 1,
            maxSteps: 2,
        };

        this._nextStep = this._nextStep.bind(this);
        this._previousStep = this._previousStep.bind(this);
    }

    storePersonalFidbackProfile() {
        const {
            selectedSubjects,
            mentalIllness,
            chronicPain,
            previousTherapies,
            medication,
            medicationDetails,
            dietEvaluation,
            sleepEvaluation,
            financialStatusEvaluation,
        } = this.state;

        const request = {
            selectedSubjects,
            mentalIllness,
            chronicPain,
            previousTherapies,
            medication,
            medicationDetails,
            dietEvaluation,
            sleepEvaluation,
            financialStatusEvaluation,
        };

        if(request.mentalIllness.length === 0) {
            request.mentalIllness = 'no';
        }

        if(request.chronicPain.length === 0) {
            request.chronicPain = 'no';
        }

        if(request.previousTherapies.length === 0) {
            request.previousTherapies = 'no';
        }

        if(request.medication.length === 0) {
            request.medication = 'no';
        }

        this.props.storePersonalFidbackProfile(request);
    }

    _nextStep() {
        const {currentStep, maxSteps} = this.state;
        if (currentStep < maxSteps) {
            this.setState({currentStep: currentStep + 1});
        }
    }

    _previousStep() {
        const {currentStep} = this.state;
        if (currentStep > 1) {
            this.setState({currentStep: currentStep - 1});
        }
    }

    render() {
        const {
            currentStep,
            maxSteps,
            mentalIllness,
            hasMentalIllness,
            chronicPain,
            hasChronicPain,
            previousTherapies,
            hasPreviousTherapies,
            medication,
            medicationDetails,
        } = this.state;
        return (
            <SafeAreaView>
                <ScrollView>
                    {currentStep === 1 && (
                        <ImageBackground source={BG_IMAGE} style={styles.welcomeBgImage}>
                            <View style={styles.welcomeContainer}>
                                <Text style={styles.header}>Καλώς ήρθες!</Text>
                                <Divider style={{
                                    backgroundColor: AppStyles.color.COLOR_PRIMARY,
                                    marginTop: 10,
                                    marginBottom: 15
                                }}/>
                                <Text style={{textAlign: 'left', fontSize: 15, color: AppStyles.color.COLOR_WHITE, lineHeight: 20, paddingBottom: 10}}>
                                    Το <Text style={{fontWeight: "bold"}}>Personal FiDback</Text> είναι η προσωπική ανατροφοδότηση από έναν Ειδικό Ψυχικής Υγείας της εφαρμογής <Text style={{fontWeight: "bold"}}>FiD</Text>, ο οποίος βρίσκεται στη διάθεσή σου για να σε βοηθήσει σε ό,τι σε απασχολεί! 
                                </Text>
                                <Text style={{textAlign: 'left', fontSize: 15, color: AppStyles.color.COLOR_WHITE, lineHeight: 20, paddingBottom: 10}}>
                                    Γράψε το ερώτημά σου όσο πιο ξεκάθαρα γίνεται και σύνδεσέ το με ένα συγκεκριμένο χρονικό διάστημα που έκανες <Text style={{fontWeight: "bold"}}>FiD</Text>.  
                                </Text>
                                <Text style={{textAlign: 'left', fontSize: 15, color: AppStyles.color.COLOR_WHITE, lineHeight: 20, paddingBottom: 10}}>
                                    Οι πληροφορίες αυτές θα βοηθήσουν τον Ειδικό Ψυχικής Υγείας να έχει μία πιο σαφή εικόνα για το ζήτημα που χρειάζεσαι κατεύθυνση. 
                                </Text>
                                <Text style={{textAlign: 'left', fontSize: 15, color: AppStyles.color.COLOR_WHITE, lineHeight: 20, paddingBottom: 10}}>
                                    Ο Ειδικός θα φροντίσει να σου απαντήσει με <Text style={{fontWeight: "bold"}}>Personal FiDback</Text> τις επόμενες 24 ώρες!
                                </Text>
                                <Text style={{textAlign: 'left', fontSize: 15, color: AppStyles.color.COLOR_WHITE, lineHeight: 20, paddingBottom: 10}}>
                                    Πριν προχωρήσουμε όμως, θα θέλαμε να μας απαντήσεις σε ορισμένες ερωτήσεις για να μας βοηθήσεις να σε γνωρίσουμε καλύτερα. 
                                </Text>
                            </View>
                            {currentStep < maxSteps && (
                                <View style={styles.buttonWrapper}>
                                    <Button
                                        containerStyle={styles.buttonContainer}
                                        title="Επόμενο"
                                        buttonStyle={styles.sendButton}
                                        titleStyle={styles.sendButtonText}
                                        onPress={() => this._nextStep()}
                                    />
                                </View>
                            )}
                        </ImageBackground>
                    )}
                    {currentStep === 2 && (
                        <View style={styles.formContainer}>
                            <Text style={styles.question}>Υπάρχουν κάποια θέματα στα οποία θα ήθελες να εστιάσεις
                                περισσότερο;</Text>
                            {this.state.subjects.map(subject => (
                                <CheckBox
                                    key={subject.id}
                                    onPress={() => {
                                        let index = this.state.selectedSubjects.findIndex(subjectLabel => subjectLabel === subject.label);
                                        if (index > -1) {
                                            let newArray = this.state.selectedSubjects;
                                            newArray.splice(index, 1);
                                            this.setState({selectedSubjects: [...newArray]});
                                        } else {
                                            this.setState({selectedSubjects: [...this.state.selectedSubjects, subject.label]});
                                        }
                                    }}
                                    checked={this.state.selectedSubjects.findIndex(subjectLabel => subjectLabel === subject.label) > -1}
                                    checkedColor={AppStyles.color.COLOR_PRIMARY}
                                    title={subject.label}/>
                            ))}
                            <Text style={styles.question}>Έχεις διαγνωσθεί με κάποια ψυχική διαταραχή;</Text>
                            <RNPickerSelect
                                value={hasMentalIllness}
                                placeholder={{}}
                                items={[
                                    {label: 'Ναι', value: true},
                                    {label: 'Όχι', value: false},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        hasMentalIllness: value,
                                    });
                                }}
                            />
                            {hasMentalIllness && (
                                <View>
                                    <Input
                                        inputStyle={{
                                            color: AppStyles.color.COLOR_DISABLE,
                                            backgroundColor: 'transparent'
                                        }}
                                        label={'Αν ναι, ποια είναι:'}
                                        value={mentalIllness}
                                        keyboardAppearance="light"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        ref={input => (this.mentalIllnessInput = input)}
                                        onChangeText={mentalIllness => this.setState({mentalIllness})}
                                    />
                                </View>
                            )}
                            <Text style={styles.question}>Αντιμετωπίζεις κάποιο πρόβλημα σωματικής υγείας ή χρόνιου
                                πόνου;</Text>
                            <RNPickerSelect
                                value={hasChronicPain}
                                placeholder={{}}
                                items={[
                                    {label: 'Ναι', value: true},
                                    {label: 'Όχι', value: false},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        hasChronicPain: value,
                                    });
                                }}
                            />
                            {hasChronicPain && (
                                <View>
                                    <Input
                                        inputStyle={{
                                            color: AppStyles.color.COLOR_DISABLE,
                                            backgroundColor: 'transparent'
                                        }}
                                        label={'Αν ναι, ποιο είναι:'}
                                        value={chronicPain}
                                        keyboardAppearance="light"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        ref={input => (this.chronicPainInput = input)}
                                        onChangeText={chronicPain => this.setState({chronicPain})}
                                    />
                                </View>
                            )}
                            <Text style={styles.question}>Έχεις λάβει βοήθεια από κάποιον ψυχολόγο στο παρελθόν;</Text>
                            <RNPickerSelect
                                value={hasPreviousTherapies}
                                placeholder={{}}
                                items={[
                                    {label: 'Ναι', value: true},
                                    {label: 'Όχι', value: false},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        hasPreviousTherapies: value,
                                    });
                                }}
                            />
                            {hasPreviousTherapies && (
                                <View>
                                    <Input
                                        inputStyle={{
                                            color: AppStyles.color.COLOR_DISABLE,
                                            backgroundColor: 'transparent'
                                        }}
                                        label={'Αν ναι, πόσο καιρό πριν ήταν και ποια ήταν η διάρκεια:'}
                                        value={previousTherapies}
                                        keyboardAppearance="light"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        ref={input => (this.previousTherapiesInput = input)}
                                        onChangeText={previousTherapies => this.setState({previousTherapies})}
                                    />
                                </View>
                            )}
                            <Text style={styles.question}>Λαμβάνεις ψυχοφαρμακευτική αγωγή;</Text>
                            <RNPickerSelect
                                value={medication}
                                placeholder={{}}
                                items={[
                                    {label: 'Ναι', value: 'yes'},
                                    {label: 'Όχι', value: 'no'},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        medication: value,
                                    });
                                }}
                            />
                            {medication === 'yes' && (
                                <View>
                                    <Input
                                        inputStyle={{
                                            color: AppStyles.color.COLOR_DISABLE,
                                            backgroundColor: 'transparent'
                                        }}
                                        label={'Αν ναι, τι φάρμακα παίρνεις και πόσο καιρό τα λαμβάνεις:'}
                                        value={medicationDetails}
                                        keyboardAppearance="light"
                                        autoFocus={false}
                                        autoCapitalize="none"
                                        ref={input => (this.medicationDetailsInput = input)}
                                        onChangeText={medicationDetails => this.setState({medicationDetails})}
                                    />
                                </View>
                            )}
                            <Text style={styles.question}>Πώς αξιολογείς τις διατροφικές σου συνήθειες;</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                items={[
                                    {label: 'Καλές', value: 1},
                                    {label: 'Μέτριες', value: 2},
                                    {label: 'Κακές', value: 3},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        dietEvaluation: value,
                                    });
                                }}
                            />
                            <Text style={styles.question}>Πώς αξιολογείς τον ύπνο σου;</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                items={[
                                    {label: 'Καλός', value: 1},
                                    {label: 'Μέτριος', value: 2},
                                    {label: 'Κακός', value: 3},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        sleepEvaluation: value,
                                    });
                                }}
                            />
                            <Text style={styles.question}>Πώς αξιολογείς την οικονομική σου κατάσταση;</Text>
                            <RNPickerSelect
                                placeholder={{}}
                                items={[
                                    {label: 'Καλή', value: 1},
                                    {label: 'Μέτρια', value: 2},
                                    {label: 'Κακή', value: 3},
                                ]}
                                onValueChange={value => {
                                    this.setState({
                                        financialStatusEvaluation: value,
                                    });
                                }}
                            />
                            <Text style={styles.note}>Η εφαρμογή FiD και το Personal FiDback δεν λειτουργεί ως ψυχοθεραπευτικό εργαλείο και οι ανατροφοδοτήσεις από τους ειδικούς ψυχικής υγείας δεν αντικαθιστούν την ψυχοθεραπεία. Σε περίπτωση σοβαρού αιτήματος, αναζητήστε βοήθεια από ένα Κέντρο Ψυχικής Υγείας ή Νοσοκομείο</Text>
                        </View>
                    )}
                    {/* {currentStep < maxSteps && (
                        <View style={styles.buttonWrapper}>
                            <Button
                                containerStyle={styles.buttonContainer}
                                title="Επόμενο"
                                buttonStyle={styles.sendButton}
                                titleStyle={styles.sendButtonText}
                                onPress={() => this._nextStep()}
                            />
                        </View>
                    )} */}
                    {currentStep === maxSteps && (
                        <View style={styles.buttonWrapper}>
                            <Button
                                containerStyle={styles.buttonContainer}
                                title="Αποθήκευση"
                                buttonStyle={styles.sendButton}
                                titleStyle={styles.sendButtonText}
                                loading={this.props.isStorePersonalFidbackLoading}
                                disabled={this.props.isStorePersonalFidbackLoading}
                                onPress={() => this.storePersonalFidbackProfile()}
                            />
                        </View>
                    )}
                    {currentStep > 1 && (
                        <View style={styles.buttonWrapper}>
                            <Button
                                containerStyle={styles.buttonContainer}
                                title="Προηγούμενο"
                                buttonStyle={styles.sendButtonPrevious}
                                titleStyle={styles.sendButtonPreviousText}
                                onPress={() => this._previousStep()}
                            />
                        </View>
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    }
}

PersonalFidbackProfileView.propTypes = {
    storePersonalFidbackProfile: PropTypes.func,
    isStorePersonalFidbackLoading: PropTypes.bool
};

export default PersonalFidbackProfileView;
