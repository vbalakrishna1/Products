import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ProductItem from './Item';

import { defaultProducts } from '../../Utilities/Constants';

export default function Products() {
  const [products, setProducts] = useState(defaultProducts);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({item}) => <ProductItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});
