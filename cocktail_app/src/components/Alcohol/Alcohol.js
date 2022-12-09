import React, {useCallback} from 'react';
import styles from './Alcohol.style';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const Alcohol = ({img, title}) => {
  const navigation = useNavigation();

  const goToCocktail = useCallback(() => {
    navigation.navigate('Liste de cocktails');
  }, [navigation]);

  return (
    <View style={styles.typeOfAlcohol}>
      <Text style={styles.title}> {title} </Text>
      <Image style={styles.image} source={img} />
      <TouchableHighlight onPress={goToCocktail}>
        <Text style={styles.title2}> Voir les cocktails </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Alcohol;
