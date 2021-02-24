import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchArticles(nextPageUrl, existingArticlesIds = [], token) {
    if (nextPageUrl === '' || nextPageUrl === null) {
        return Api(
            ApiConstants.BLOG + 'blog-article',
            {articleIds: existingArticlesIds},
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
            body: JSON.stringify({articleIds: existingArticlesIds}),
        };
        return fetch(nextPageUrl, options)
            .then(resp => resp.json())
            .then(json => json)
            .catch(error => error);
    }
}
