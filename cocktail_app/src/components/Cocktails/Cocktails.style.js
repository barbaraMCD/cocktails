import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
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
  image: {
    height: 200,
    width: 200,
    borderRadius: 30,
  },
});

export default styles;
