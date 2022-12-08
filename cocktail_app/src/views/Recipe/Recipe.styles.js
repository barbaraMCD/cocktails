import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  form: {
    justifyContent: 'space-around',
    height: 300,
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 30,
    backgroundColor: '#F0FFFF',
  },
  inputInvalid: {
    backgroundColor: '#F0FFFF',
    width: 200,
    height: 30,
  },
});

export default styles;
