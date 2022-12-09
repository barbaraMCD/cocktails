import React, {useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getRecipe} from '../../helpers/api';
import styles from './Recipe.styles';

const Recipe = () => {
  const [data, setData] = useState([]);
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
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <TouchableHighlight onPress={loadData}>
        <Text> Rechercher </Text>
      </TouchableHighlight>
      <Text> {data.strDrink} </Text>
      <Text> {data.strInstructions} </Text>
      <Text> {data.strIngredient1} </Text>
    </SafeAreaView>
  );
};

export default Recipe;
