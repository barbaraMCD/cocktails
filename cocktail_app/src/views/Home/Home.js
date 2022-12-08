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
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const goToGinCocktail = useCallback(() => {
    navigation.navigate('GinView');
  }, [navigation]);

  const goToVodkaCocktail = useCallback(() => {
    navigation.navigate('VodkaView');
  }, [navigation]);

  const goToRhumCocktail = useCallback(() => {
    navigation.navigate('RhumView');
  }, [navigation]);

  const goToTequilaCocktail = useCallback(() => {
    navigation.navigate('TequilaView');
  }, [navigation]);

  const goToWhiskyCocktail = useCallback(() => {
    navigation.navigate('WhiskyView');
  }, [navigation]);

  const goToCointreauCocktail = useCallback(() => {
    navigation.navigate('CointreauView');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {' '}
        Trouvez des cocktails selon votre alcool favoris !{' '}
      </Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Alcohol title={'gin'} img={gin} goToCocktail={goToGinCocktail} />
          <Alcohol
            title={'vodka'}
            img={vodka}
            goToCocktail={goToVodkaCocktail}
          />
          <Alcohol
            title={'tequila'}
            img={tequila}
            goToCocktail={goToTequilaCocktail}
          />
        </View>
        <View style={styles.column}>
          <Alcohol
            title={'whisky'}
            img={whisky}
            goToCocktail={goToWhiskyCocktail}
          />
          <Alcohol title={'rhum'} img={rhum} goToCocktail={goToRhumCocktail} />
          <Alcohol
            title={'cointreau'}
            img={cointreau}
            goToCocktail={goToCointreauCocktail}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
