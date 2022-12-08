import React, {useEffect, useState} from 'react';
import {Image, Text, View,TouchableHighlight} from 'react-native';
import {getRecipe} from '../../helpers/api';
import styles from './Recipe.styles';

const Recipe = ({strInstructions, }) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await getRecipe();
    setData(res.recipe);
  };

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <View>
      <Text></Text>
      <Text> {data.strInstructions} </Text>
      <Text> Voir les alcools</Text>
      
  </View>
  );
};

export default Cocktails;