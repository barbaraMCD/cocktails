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
    fontSize: 28,
    fontWeight: '600',
    color: '#03989e',
    marginBottom: 10,
    paddingHorizontal: 25,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  typeOfAlcohol: {
    alignItems: 'center',
    marginTop: 40,
    justifyContent: 'space-around',
    shadowColor: '#171717',
    height: 200,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default styles;
