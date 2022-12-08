import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Cocktails.style';

const Cocktails = ({title, img}) => {
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
