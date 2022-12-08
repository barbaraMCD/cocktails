import React, {useEffect, useState} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {getRecipe} from '../../helpers/api';
import styles from './Recipe.styles';

const Recipe = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const [value, setValue] = useState([]);

  const loadData = async () => {
    const res = await getRecipe(value);
    setData(res.drinks);
  };

  // strDrink : recuperer le title (margarita)
  // strInstructions : recuperer la recette
  // strIngredient1, etc tous les ingrédients
  // strDrinkThumb : image du cocktail

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <TouchableHighlight onPress={loadData}>
        <Text> Rechercher </Text>
      </TouchableHighlight>
      <Text> {data.strDrink} </Text>
      <Text> {data.strInstructions} </Text>
      <Text> {data.strIngredient1} </Text>
    </View>
  );
};

export default Recipe;
