import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import AppStyles from 'app/config/styles';
import styles from './styles';
import ApiConstants from '../../api/ApiConstants';

class PrivacyPolicyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isFetchPrivacyPolicyLoading) {
            return <ActivityIndicator style={styles.activityIndicator} size="large"
                                      color={AppStyles.color.COLOR_PRIMARY}/>;
        }
        return (
            <WebView source={{uri: ApiConstants.BASE_URL + ApiConstants.PRIVACY_POLICY}}/>
        );
    }
}

export default PrivacyPolicyView;
