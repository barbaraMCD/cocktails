import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Home.style';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Home </Text>
    </SafeAreaView>
  );
};

export default Home;
