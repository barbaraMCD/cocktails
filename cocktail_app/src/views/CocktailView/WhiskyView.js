import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const GinView = () => {
  const [whisky, setWhisky] = useState([]);

  const loadWhisky = async () => {
    const res = await getCocktailsPerAlcool('whiskey');
    setWhisky(res.drinks);
  };

  useEffect(() => {
    loadWhisky();
  }, []);

  const whiskyCocktails = whisky.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{whiskyCocktails}</View>
    </ScrollView>
  );
};

export default GinView;
