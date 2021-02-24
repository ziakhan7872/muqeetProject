import { StyleSheet } from "react-native";
import AppStyles from '../../../../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    //padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  monthName: {
    fontSize: 24,
    textAlign: 'center',
    color: AppStyles.color.COLOR_PRIMARY,
    fontWeight: 'bold',
    margin: 10
  },
  time: {
    fontSize: 12,
    textAlign: 'right',
    color: '#999'
  },
  emotion_name: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  comment: {
    color: '#999'
  }
});

export default styles;
