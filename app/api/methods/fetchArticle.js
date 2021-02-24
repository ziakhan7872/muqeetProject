import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchArticle(id, token) {
    return Api(
        ApiConstants.BLOG + 'blog-article/' + id,
        null,
        'get',
        token
    );
}
