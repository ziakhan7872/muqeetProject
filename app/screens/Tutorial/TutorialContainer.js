import React, { Component } from 'react';
import { InteractionManager, ActivityIndicator, StyleSheet } from 'react-native';
import TutorialView from './TutorialView';
import AppStyles from 'app/config/styles';
import { connect } from 'react-redux';
import MenuButton from '../../components/MenuButton';

class TutorialContainer extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Οδηγίες χρήσης',
        headerLeft: <MenuButton navigation={navigation}/>,
        // headerRight: <PFButton navigation={navigation}/>
    });

    constructor(props) {
        super(props);

        this.state = {
            isReady: false
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                isReady: true
            });
        });
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator style={styles.activityIndicator} size="large" color={AppStyles.color.COLOR_PRIMARY} />;
        }
        return <TutorialView {...this.props} />;
    }
}

const styles = StyleSheet.create({
    activityIndicator: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});

function mapStateToProps(state) {
    const {loginReducer} = state;
    return {
        isLoggedIn: loginReducer.isLoggedIn
    };
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TutorialContainer);
