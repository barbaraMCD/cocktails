import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {getCocktailsPerAlcool} from '../../helpers/api';
import styles from './Cocktails.style';

const Cocktails = ({title, img}) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await getCocktailsPerAlcool('gin');
    setData(res.drinks);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <Image
        style={styles.image}
        source={{
          uri: `${img}`,
        }}
      />
    </View>
  );
};

export default Cocktails;
