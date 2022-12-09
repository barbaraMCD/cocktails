import React, {useCallback, useEffect, useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Home.style';
import gin from '../../assets/images/Gin.jpeg';
import vodka from '../../assets/images/vodka.png';
import cointreau from '../../assets/images/cointreau.png';
import tequila from '../../assets/images/tequila.jpeg';
import whisky from '../../assets/images/whisky.jpeg';
import rhum from '../../assets/images/rhum.jpeg';
import Alcohol from '../../components/Alcohol/Alcohol';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {' '}
        Trouvez des cocktails selon votre alcool favoris !{' '}
      </Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Alcohol style={styles.title} title={'Gin'} img={gin} />
          <Alcohol style={styles.title} title={'Vodka'} img={vodka} />
          <Alcohol style={styles.title} title={'Tequila'} img={tequila} />
        </View>
        <View style={styles.column}>
          <Alcohol style={styles.title} title={'Whisky'} img={whisky} />
          <Alcohol style={styles.title} title={'Rhum'} img={rhum} />
          <Alcohol style={styles.title} title={'Cointreau'} img={cointreau} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
