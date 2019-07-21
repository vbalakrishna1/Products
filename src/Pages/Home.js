import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../Components/Header';
import Products from '../Components/Products';
import Fab from '../Components/Fab';

export default function Home() {

  const [isGroupByMerchant, setIsGroupByMerchant] = useState(false);
  const [isFabTouched, setIsFabTouched] = useState(false);

  function toggleFab() {
    setIsFabTouched(!isFabTouched);
  }

  function toggleGroupByMerchant() {
    setIsGroupByMerchant(!isGroupByMerchant);
  }

  return (
    <View style={styles.container}>
      <Header isGroupByMerchant={isGroupByMerchant} onPressLink={toggleGroupByMerchant} />
      <Products 
        showAddProduct={isFabTouched} 
        closeAddProduct={toggleFab} 
        isGroupByMerchant={isGroupByMerchant} 
      />
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
