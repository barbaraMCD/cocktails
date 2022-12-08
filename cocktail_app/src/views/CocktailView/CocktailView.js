import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Cocktails from '../../components/Cocktails/Cocktails';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './CocktailView.style';

const CocktailsView = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await getCocktailsPerAlcool('gin');
    setData(res.drinks);
  };

  useEffect(() => {
    loadData();
  }, []);

  const cocktails = data.map((c, i) => {
    return <Cocktails key={i} title={c.strDrink} img={c.strDrinkThumb} />;
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>{cocktails}</View>
    </ScrollView>
  );
};

export default CocktailsView;
