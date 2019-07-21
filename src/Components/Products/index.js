import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Add from './Add';
import Item from './Item';

import { defaultProducts } from '../../Utilities/Constants';

export default function Products({ showAddProduct, closeAddProduct }) {
  const [products, setProducts] = useState(defaultProducts);

  function addProduct(product) {
    setProducts([...products, product]);
  }

  function deleteProduct(productId) {
    const index = products.findIndex(product => product.id === productId);
    products.splice(index, 1);
    setProducts([...products]);
  }

  return (
    <View style={styles.container}>
      <Add visible={showAddProduct} close={closeAddProduct} save={addProduct} />
      <FlatList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({item}) => <Item data={item} deleteProduct={deleteProduct} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});
