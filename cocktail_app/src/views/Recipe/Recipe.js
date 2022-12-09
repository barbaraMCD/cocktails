import React, {useState} from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getRecipe} from '../../helpers/api';
import styles from './Recipe.styles';

const Recipe = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  console.log(data);
  console.log(data.strDrink);
  console.log(data.strInstructions);
  console.log(data.strDrinkThumb); // photo

  const loadData = async () => {
    const res = await getRecipe(value);
    setData(res);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Text style={styles.title}> Trouver la recette d'un cocktail </Text>
        <TextInput style={styles.input} value={value} onChangeText={setValue} />
        <TouchableHighlight onPress={loadData}>
          <Text> Rechercher </Text>
        </TouchableHighlight>
      </View>
      <View style={styles.recipe}>
        <Text style={styles.title}> {data.strDrink} </Text>
          {/* <Image
            style={styles.image}
            source={{
              uri: `${data.strDrinkThumb}`,
            }}
          /> */}
          <Text> {data.strIngredient1} </Text>
          <Text> {data.strIngredient2} </Text>
          <Text> {data.strIngredient3} </Text>
          <Text> {data.strIngredient4} </Text>
          <Text> {data.strIngredient5} </Text>
          <Text> {data.strIngredient6} </Text>
          <Text> {data.strIngredient7} </Text>
          <Text> {data.strIngredient8} </Text>
          <Text> {data.strIngredient9} </Text>
          <Text> {data.strIngredient10} </Text>
          <Text> {data.strIngredient11} </Text>
          <Text> {data.strInstructions} </Text>
      </View>
    </SafeAreaView>
  );
};

export default Recipe;
