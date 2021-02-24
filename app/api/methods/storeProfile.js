import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function storeProfile(profile, token) {
    return Api(
        ApiConstants.PROFILE,
        {
            dob: profile.dob,
            gender: profile.gender,
            chronic_illness: profile.chronicIllness,
            country: profile.country,
            city: profile.city,
            marital_status: profile.maritalStatus,
            children: profile.hasChildren,
            employment_status: profile.isEmployed,
            fidback_frequency: profile.fidbackFrequency,
        },
        'put',
        token
    );
}
