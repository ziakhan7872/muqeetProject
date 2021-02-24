/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToLogin(params) {
    NavigationService.navigate('Login', params);
}

export function navigateToHome(params) {
    NavigationService.navigateWithoutHistory('Drawer', params);
}

export function navigateToTutorial(params) {
    NavigationService.navigate('Tutorial', params);
}

export function navigateToArticle(params) {
    NavigationService.navigate('Article', params);
}

export function navigateToCalendarItem(params) {
    NavigationService.navigate('CalendarItem', params);
}

export function navigateToAutoFidbackItem(params) {
    NavigationService.navigate('AutoFidbackItem', params);
}

export function navigateToSubscriptionPlans(params) {
    NavigationService.navigate('SubscriptionPlans', params);
}

export function navigateToPersonalFidbackRequest(params) {
    NavigationService.navigate('PersonalFidbackRequest', params);
}

export function navigateToPersonalFidbackList(params) {
    NavigationService.navigate('PersonalFidbackList', params);
}

export function navigateToChat(params) {
    NavigationService.navigate('PersonalFidbackChat', params);
}