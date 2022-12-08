import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const GinView = () => {
  const [vodka, setVodka] = useState([]);

  const loadVodka = async () => {
    const res = await getCocktailsPerAlcool('vodka');
    setVodka(res.drinks);
  };

  useEffect(() => {
    loadVodka();
  }, []);

  const vodkaCocktails = vodka.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{vodkaCocktails}</View>
    </ScrollView>
  );
};

export default GinView;
