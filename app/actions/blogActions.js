/*
 * Reducer actions related with login
 */
import * as types from './types';

// All Articles
export function fetchArticles(nextPageUrl, existingArticlesIds) {
    return {
        type: types.ARTICLES_FETCH_REQUEST,
        nextPageUrl,
        existingArticlesIds
    };
}

export function articlesFetchFailed() {
    return {
        type: types.ARTICLES_FETCH_FAILED
    };
}

export function onArticlesFetchResponse(response) {
    return {
        type: types.ARTICLES_FETCH_RESPONSE,
        response
    };
}

export function enableArticlesLoader() {
    return {
        type: types.ARTICLES_FETCH_ENABLE_LOADER
    };
}

export function disableArticlesLoader() {
    return {
        type: types.ARTICLES_FETCH_DISABLE_LOADER
    };
}

// Single Article
export function fetchArticle(id) {
    return {
        type: types.ARTICLE_FETCH_REQUEST,
        id
    };
}

export function articleFetchFailed() {
    return {
        type: types.ARTICLE_FETCH_FAILED
    };
}

export function onArticleFetchResponse(response) {
    return {
        type: types.ARTICLE_FETCH_RESPONSE,
        response
    };
}

export function enableArticleLoader() {
    return {
        type: types.ARTICLE_FETCH_ENABLE_LOADER
    };
}

export function disableArticleLoader() {
    return {
        type: types.ARTICLE_FETCH_DISABLE_LOADER
    };
}

// Relaxation Exercises
export function fetchRelaxationExercises(relaxationExercisesNextPageUrl, existingRelaxationExercisesIds) {
    return {
        type: types.RELAXATION_EXERCISES_FETCH_REQUEST,
        relaxationExercisesNextPageUrl,
        existingRelaxationExercisesIds
    };
}

export function fetchRelaxationExercisesFetchFailed() {
    return {
        type: types.RELAXATION_EXERCISES_FETCH_FAILED
    };
}

export function onRelaxationExercisesFetchResponse(response) {
    return {
        type: types.RELAXATION_EXERCISES_FETCH_RESPONSE,
        response
    };
}

export function enableRelaxationExercisesLoader() {
    return {
        type: types.RELAXATION_EXERCISES_FETCH_ENABLE_LOADER
    };
}

export function disableRelaxationExercisesLoader() {
    return {
        type: types.RELAXATION_EXERCISES_FETCH_DISABLE_LOADER
    };
}

// Lockdown mental health tips
export function fetchLockdownMentalHealthTips(lockdownMentalHealthTipsNextPageUrl) {
    return {
        type: types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_REQUEST,
        lockdownMentalHealthTipsNextPageUrl
    };
}

export function fetchLockdownMentalHealthTipsFetchFailed() {
    return {
        type: types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_FAILED
    };
}

export function onLockdownMentalHealthTipsFetchResponse(response) {
    return {
        type: types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_RESPONSE,
        response
    };
}

export function enableLockdownMentalHealthTipsLoader() {
    return {
        type: types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_ENABLE_LOADER
    };
}

export function disableLockdownMentalHealthTipsLoader() {
    return {
        type: types.LOCKDOWN_MENTAL_HEALTH_TIPS_FETCH_DISABLE_LOADER
    };
}

