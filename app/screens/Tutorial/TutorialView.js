/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StatusBar, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import PropTypes from 'prop-types';
import AppStyles from 'app/config/styles';
import {NavigationActions, StackActions} from 'react-navigation';

const SCREEN_HEIGHT = Dimensions
    .get('screen')
    .height;

const slides = [
    {
        key: 'step1',
        title: 'Εισαγωγικό σημείωμα',
        text: 'Καλώς ήρθες στο FiD, στην ηλεκτρονική εφαρμογή που θα σε βοηθήσει να μειώσεις το άγχος και να αυξήσεις την ευεξία σου!',
        image: require('../../../assets/images/fid-logo-transparent.png'),
        backgroundColor: '#e5006d',
    },
    {
        key: 'step2',
        title: 'Βήμα 1ο',
        text: 'Κατέγραψε το συναίσθημα και την έντασή του, γράψε μία σκέψη σου ή ένα γεγονός που σχετίζεται με αυτό και συμπλήρωσε τα υπόλοιπα πεδία για να δημιουργήσεις ένα FiD! Πάτα Αποθήκευση και μόλις έκανες ένα FiD!',
        image: require('../../../assets/images/plus.png'),
        backgroundColor: '#b8a6e1',
    },
    {
        key: 'step3',
        title: 'Βήμα 2ο',
        text: 'Όλα τα FiD σου θα τα βρεις στο Ημερολόγιο Συναισθημάτων όπου με εύκολο τρόπο μπορείς να ανατρέξεις στην ημέρα που θέλεις για να δεις πώς ένιωσες και γιατί. Η γνώση του συναισθηματικού παρελθόντος θα σε βοηθήσει να δημιουργήσεις ένα ακόμη καλύτερο μέλλον!',
        image: require('../../../assets/images/calendar.png'),
        backgroundColor: '#b5788b',
    },
    {
        key: 'step4',
        title: 'Βήμα 3ο',
        text: 'Πάρε FiDback! Το FiDback είναι το «καθρέφτισμα» του συναισθηματικού σου κόσμου που σε βοηθάει να βλέπεις ποια ήταν η συναισθηματική σου κατάσταση, να βρίσκεις τρόπους διαχείρισης των συναισθημάτων σου και σε ωθεί να προάγεις τα θετικά συναισθήματα ή να προλάβεις τα αρνητικά! Μπες στο Προφίλ σου και όρισε το χρονικό διάστημα που θέλεις να το λαμβάνεις.',
        image: require('../../../assets/images/notification.png'),
        backgroundColor: '#c1a8ac',
    },
    {
        key: 'step5',
        title: 'Βήμα 4ο',
        text: 'Βρες ακόμη στο FiD ασκήσεις ευεξίας και χαλάρωσης, ενδιαφέροντα άρθρα Ψυχολογίας καθώς και τη δυνατότητα να λάβεις Personal FiDback συμβουλευτικής κατεύθυνσης από ειδικούς ψυχικής υγείας για ό,τι πρόβλημα σε απασχολεί, μέσα από ευέλικτα πακέτα συνδρομών!',
        image: require('../../../assets/images/search.png'),
        backgroundColor: '#98878f',
    },
    {
        key: 'step6',
        title: 'Τέλος;',
        text: 'Τα δεδομένα σου είναι προστατευμένα και κωδικοποιημένα και κανείς δεν μπορεί να έχει πρόσβαση σε αυτά παρά μόνο εσύ.',
        image: require('../../../assets/images/lock.png'),
        backgroundColor: '#0f7c7e',
    }
];

class TutorialView extends Component {
    constructor(props) {
        super(props);
    }

    goToHome() {
        if (this.props.isLoggedIn) {
            this.props.navigation.dispatch(
                StackActions.push({
                    routeName: 'Profile'
                })
            );
        }
    }

    render() {
        return (
            <View style={{flex: 1, height: SCREEN_HEIGHT}}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={AppStyles.color.COLOR_PRIMARY}
                    translucent={false}
                />
                <AppIntroSlider
                    style={{height: SCREEN_HEIGHT}}
                    slides={slides}
                    onDone={() => this.goToHome()}
                    bottomButton
                    nextLabel={'Επόμενο'}
                    doneLabel={'Ας ξεκινήσουμε'}
                />
            </View>
        );
    }
}

TutorialView.propTypes = {
    onLogin: PropTypes.func,
    navigation: PropTypes.object,
    isLoggedIn: PropTypes.bool,
};

export default TutorialView;
