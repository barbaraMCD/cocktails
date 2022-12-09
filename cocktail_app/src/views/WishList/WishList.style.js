import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    padding: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    backgroundColor: 'white',
    width: 300,
    textAlign: 'center',
  },
  card: {
    height: 350,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },
  title: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'grey',
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
    borderRadius: 10,
  },
});

export default styles;
