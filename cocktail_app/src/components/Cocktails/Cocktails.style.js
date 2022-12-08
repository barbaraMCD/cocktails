import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
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
  image: {
    height: 200,
    width: 200,
    borderRadius: 3,
  },
});

export default styles;
