import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
  },
  title: {
    marginBottom: 30,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#03989e',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#dc143c',
    borderRadius: 3,
    padding: 10,
  },
  textButton: {
    color: 'white',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 30,
  },
});

export default styles;
