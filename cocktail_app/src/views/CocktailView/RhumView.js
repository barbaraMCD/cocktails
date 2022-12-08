import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const RhumView = () => {
  const [rhum, setRhum] = useState([]);

  const loadRhum = async () => {
    const res = await getCocktailsPerAlcool('rum');
    setRhum(res.drinks);
  };

  useEffect(() => {
    loadRhum();
  }, []);

  const rhumCocktails = rhum.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{rhumCocktails}</View>
    </ScrollView>
  );
};

export default RhumView;
