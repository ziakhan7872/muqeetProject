import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchRelaxationExercises(relaxationExercisesNextPageUrl, existingRelaxationExercisesIds = [], token) {
    if (relaxationExercisesNextPageUrl === '' || relaxationExercisesNextPageUrl === null) {
        return Api(
            ApiConstants.RELAXATION_EXERCISES,
            {articleIds: existingRelaxationExercisesIds},
            'post',
            token
        );
    } else {
        const options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                ...(token && {Authorization: 'Bearer ' + token})
            },
            method: 'post',
            body: JSON.stringify({articleIds: existingRelaxationExercisesIds}),
        };
        return fetch(relaxationExercisesNextPageUrl, options)
            .then(resp => resp.json())
            .then(json => json)
            .catch(error => error);
    }
}
