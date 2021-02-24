import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function storePersonalFidbackProfile(profile, token) {
    return Api(
        ApiConstants.PERSONAL_FIDBACK_PROFILE,
        {
            subjects: profile.selectedSubjects,
            mental_illness: profile.mentalIllness,
            chronic_pain: profile.chronicPain,
            previous_therapies: profile.previousTherapies,
            medication: profile.medication,
            medication_details: profile.medicationDetails,
            diet_evaluation: profile.dietEvaluation,
            sleep_evaluation: profile.sleepEvaluation,
            financial_status_evaluation: profile.financialStatusEvaluation,
        },
        'post',
        token
    );
}
