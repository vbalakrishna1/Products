import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons' ;

import StarRating from '../StarRating';

export default function ProductItem({data, deleteProduct}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{data.name}</Text>  
        <View style={styles.secondRow}>
          <Text style={styles.price}>{data.price}</Text>
          <StarRating number={data.rating} />
        </View>
      </View>
      <Icon name="delete-outline" style={styles.delete} onPress={()=>deleteProduct(data.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  image: {
    height: 60, 
    width: 60
  },
  content: {
    flex: 1, 
    paddingHorizontal: 16
  },
  title: {
    fontSize: 16
  },
  secondRow: {
    flexDirection: 'row', 
    paddingVertical: 4,
    alignItems: 'center'
  },
  price: {
    color: '#888'
  },
  delete: {
    fontSize: 20,
    color: '#ccc'
  }
});
