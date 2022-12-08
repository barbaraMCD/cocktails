import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const TequilaView = () => {
  const [tequila, setTequila] = useState([]);

  const loadTequila = async () => {
    const res = await getCocktailsPerAlcool('tequila');
    setTequila(res.drinks);
  };

  useEffect(() => {
    loadTequila();
  }, []);

  const tequilaCocktails = tequila.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{tequilaCocktails}</View>
    </ScrollView>
  );
};

export default TequilaView;
