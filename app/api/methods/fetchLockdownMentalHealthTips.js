import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchLockdownMentalHealthTips(lockdownMentalHealthTipsNextPageUrl, token) {
    if (lockdownMentalHealthTipsNextPageUrl === '' || lockdownMentalHealthTipsNextPageUrl === null) {
        return Api(
            `${ApiConstants.BLOG_CATEGORY}3/blog-articles`,
            {articleIds: []},
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
            body: JSON.stringify({articleIds: []}),
        };
        return fetch(lockdownMentalHealthTipsNextPageUrl, options)
            .then(resp => resp.json())
            .then(json => json)
            .catch(error => error);
    }
}
