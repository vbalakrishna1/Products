import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../Components/Header';
import Products from '../Components/Products';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
});
