import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  column: {
    width: Dimensions.get('window').width / 2,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
