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
    fontSize: 28,
    fontWeight: '600',
    color: '#03989e',
    marginBottom: 10,
    paddingHorizontal: 25,
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
