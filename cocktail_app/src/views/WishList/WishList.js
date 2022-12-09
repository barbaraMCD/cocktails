import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCocktail} from '../../store/reducers/wishList';
import styles from './WishList.style';

const WishList = () => {
  const {wishList} = useSelector(state => state.wishList);
  const dispatch = useDispatch();

  const myWishList = wishList.map((c, i) => {
    return (
      <View style={styles.card} key={i}>
        <Text style={styles.title}> {c.Name} </Text>
        <Image
          style={styles.image}
          source={{
            uri: `${c.Img}`,
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(deleteCocktail(c))}>
          <Text style={styles.textButton}> Remove to my wish List</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Mes préférés </Text>
      {myWishList}
    </SafeAreaView>
  );
};

export default WishList;
