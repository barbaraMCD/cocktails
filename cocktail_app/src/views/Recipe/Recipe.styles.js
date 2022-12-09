import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 30,
    width: 200,
    backgroundColor: 'white',
  },
  searchBar: {
    height: 150,
    alignItems: 'center',
    position: 'absolute',
    marginTop: 10,
    justifyContent: 'space-around',
    flexDirection: 'column',
    width: 350,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
  },
  column: {
    width: Dimensions.get('window').width / 2,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  recipe: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: 500,
    marginTop: 150,
    paddingTop: 20,
    width: 350,
    borderRadius: 5,
  },
});

export default styles;
