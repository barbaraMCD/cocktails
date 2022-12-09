import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  typeOfAlcohol: {
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#171717',
    height: 200,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  title2: {
    fontSize: 15,
    fontStyle: 'italic',
  },
});

export default styles;
