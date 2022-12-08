import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Dimensions.get('window').width,
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
