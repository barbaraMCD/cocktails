import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
    paddingHorizontal: 25,
  },
  form: {
    marginBottom: 30,
    paddingHorizontal: 25,
  },
  button: {
    backgroundColor: '#03989e',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  link: {
    color: '#03989e',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    padding: 10,
    color: 'black',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#F0FFFF',
    color: '#03989e',
  },
  inputInvalid: {
    backgroundColor: '#F0FFFF',
    width: 300,
    height: 40,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default styles;
