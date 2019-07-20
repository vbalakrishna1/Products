import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons' ;

export default function StarRating({number}) {
  
  const stars = []
  for(let i = 0; i < number; i++) {
    stars.push(<Icon key={i} name='star' style={styles.star} />)
  }

  return (
    <View style={styles.container}>{stars}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  star: {
    color: '#f8be38',
  },
});
