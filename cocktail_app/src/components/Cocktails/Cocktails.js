import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addCocktail} from '../../store/reducers/wishList';
import styles from './Cocktails.style';

const Cocktails = ({title, img}) => {
  const dispatch = useDispatch();

  const [isInWishList, setIsWishList] = useState(false);

  const [cocktail, setCocktail] = useState({
    Id: Math.random(),
    Name: title,
    Img: img,
  });

  const addInMyWishList = () => {
    dispatch(addCocktail(cocktail));
    setIsWishList(true);
  };

  return (
    <View style={styles.container}>
      {isInWishList ? (
        <Text style={styles.popper}> Cocktail ajouté aux favoris </Text>
      ) : null}
      <Text style={styles.title}> {title} </Text>
      <Image
        style={styles.image}
        source={{
          uri: `${img}`,
        }}
      />
      <TouchableOpacity style={styles.button} onPress={addInMyWishList}>
        <Text style={styles.textButton}>Add to my wish list</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cocktails;
