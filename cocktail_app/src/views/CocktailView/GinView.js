import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const GinView = () => {
  const [gin, setGin] = useState([]);

  const loadGin = async () => {
    const res = await getCocktailsPerAlcool('gin');
    setGin(res.drinks);
  };

  useEffect(() => {
    loadGin();
  }, []);

  const ginCocktails = gin.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{ginCocktails}</View>
    </ScrollView>
  );
};

export default GinView;
