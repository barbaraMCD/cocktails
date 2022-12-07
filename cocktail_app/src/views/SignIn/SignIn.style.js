import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
  },
  form: {
    justifyContent: 'space-around',
    height: 300,
    alignItems: 'flex-start',
    marginLeft: 30,
  },
  label: {
    color: 'black',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#F0FFFF',
  },
  inputInvalid: {
    backgroundColor: '#F0FFFF',
    width: 300,
    height: 40,
  },
  button: {
    backgroundColor: '#4169e1',
    padding: 10,
    borderRadius: 5,
  },
  link: {
    color: '#4169e1',
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
