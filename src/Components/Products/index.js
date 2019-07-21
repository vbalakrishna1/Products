import React, { useState } from 'react';
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons' ;

import Add from './Add';
import Item from './Item';

import { defaultProducts, merchantLogo } from '../../Utilities/Constants';

export default function Products({ showAddProduct, closeAddProduct, isGroupByMerchant }) {
  
  const [showMerchantProducts, setShowMerchantProducts] = useState([]);
  const [products, setProducts] = useState(defaultProducts);
  
  function addProduct(product) {
    setProducts([...products, product]);
  }

  function deleteProduct(productId) {
    const index = products.findIndex(product => product.id === productId);
    const name = products[index].name;
    Alert.alert(
      'Warning!',
      `Are you sure you want to delete "${name}" ?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK', 
          onPress: () => {
            products.splice(index, 1);
            setProducts([...products]);
          }
        }
      ],
      {cancelable: false},
    );    
  }

  function toggleMerchant(merchant) {
    const index = showMerchantProducts.findIndex(e => e === merchant);
    if (index < 0) {
      setShowMerchantProducts([...showMerchantProducts, merchant]);
    } else {
      showMerchantProducts.splice(index, 1);
      setShowMerchantProducts([...showMerchantProducts]);
    }
  }

  function productsList(products) {
    let view = <Text style={styles.placeholder}>No Products</Text>
    if (products.length > 0) {
      view = <FlatList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({item}) => <Item data={item} deleteProduct={deleteProduct} />}
      />
    }
    return view
  }

  function groupByMerchant() {    
    const merchants = Object.keys(merchantLogo);
    return merchants.map(merchant => {
      const data = products.filter(product => product.merchant === merchant);
      const showProducts = showMerchantProducts.includes(merchant);
      return (
        <View key={merchant} style={{paddingTop: 16}}>
          <TouchableOpacity style={styles.sectionHeader}  onPress={() => toggleMerchant(merchant)}>
            <View style={{flex: 1}}>
              <View style={styles.merchantImageContainer}>
                <Image source={{uri: merchantLogo[merchant]}} resizeMode='contain' style={styles.merchantImage} />
              </View>
            </View>
            <Icon name={showProducts ? 'chevron-up' : 'chevron-down'} style={styles.icon} />
          </TouchableOpacity>
          { showProducts 
            ? productsList(data)
            : null 
          }
        </View>
      )}
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Add visible={showAddProduct} close={closeAddProduct} save={addProduct} />
        { 
          isGroupByMerchant 
          ? groupByMerchant()
          : productsList(products)
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
  },
  sectionHeader: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 16
  },
  merchantImageContainer: {
    width: 80, 
    height: 30
  },
  merchantImage: {
    width: '100%', 
    height: '100%'
  },
  icon: {
    fontSize: 24, 
    color: '#888'
  },
  placeholder: {
    alignSelf: 'center', 
    color: '#eee'
  }
});
