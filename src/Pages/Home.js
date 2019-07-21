import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../Components/Header';
import Products from '../Components/Products';
import Fab from '../Components/Fab';

export default function Home() {

  const [isFabTouched, setIsFabTouched] = useState(false);

  function toggleFab() {
    setIsFabTouched(!isFabTouched);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Products showAddProduct={isFabTouched} closeAddProduct={toggleFab} />
      <Fab onPress={toggleFab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
});
