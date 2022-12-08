import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const CointreauView = () => {
  const [cointreau, setCointreau] = useState([]);

  const loadCointreau = async () => {
    const res = await getCocktailsPerAlcool('cointreau');
    setCointreau(res.drinks);
  };

  useEffect(() => {
    loadCointreau();
  }, []);

  const cointreauCocktails = cointreau.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{cointreauCocktails}</View>
    </ScrollView>
  );
};

export default CointreauView;
