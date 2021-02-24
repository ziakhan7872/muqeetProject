import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchAutofidbacks(nextPageUrl, existingAutofidbackIds = [], token) {
    if (nextPageUrl === '' || nextPageUrl === null) {
        return Api(
            ApiConstants.AUTOFIDBACK,
            {autoFidbackIds: existingAutofidbackIds},
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
            body: JSON.stringify({autoFidbackIds: existingAutofidbackIds}),
        };
        return fetch(nextPageUrl, options)
            .then(resp => resp.json())
            .then(json => json)
            .catch(error => error);
    }
}
