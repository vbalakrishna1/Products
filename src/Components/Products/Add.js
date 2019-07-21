import React, { useState } from 'react';
import { Dimensions, Modal, Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { merchantLogo } from '../../Utilities/Constants';

export default function Add({visible, close, save}) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');
  const [merchant, setMerchant] = useState('Amazon');

  function renderRating() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      let icon = 'star-outline';
      if (i < rating) {
        icon = 'star'
      }
      stars.push(<Icon key={i} name={icon} style={styles.star} onPress={()=>setRating(i+1)} />)
    }
    return stars;
  }

  function addProduct() {
    if (!name || !price || !image) {
      alert('Please fill all the fields');
      return;
    }
    save({
      id: (+ new Date()).toString(),
      name,
      price: 'Rs. ' + price,
      rating, 
      image,
      merchant
    });
    close();
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={close}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>PRODUCT</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                onChangeText={name => setName(name)}
                autoFocus={true}
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Price <Text style={styles.secondaryLabel}>(Rs.)</Text></Text>
            <View style={styles.textInputContainer}>
              <TextInput
                onChangeText={price => setPrice(price)}
                keyboardType='numeric'
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Rating</Text>
            <View style={styles.ratingContainer}>
              {renderRating()}
            </View>
          </View>

          <View style={styles.row}>
          <Text style={styles.label}>Image<Text style={styles.secondaryLabel}>(URL)</Text></Text>
            <View style={styles.textInputContainer}>
              <TextInput
                onChangeText={imageURL => setImage(imageURL)}
                style={styles.textInput}
              />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Merchant</Text>
            <View style={styles.textInputContainer}>
            <Picker
              selectedValue={merchant}
              onValueChange={(itemValue, itemIndex) => setMerchant(itemValue)}
            >
              {
                Object.keys(merchantLogo).map(merchant => <Picker.Item key={merchant} label={merchant} value={merchant} />)
              }
            </Picker>
            </View>
          </View>   

          <View style={[styles.row, styles.actionContainer]}>
            <Text style={styles.action} onPress={close}>CANCEL</Text>
            <Text style={[styles.action, {fontWeight: 'bold'}]} onPress={addProduct}>ADD</Text>
          </View>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0008'
  },
  card: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 6
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center'
  },
  label: {
    width: 64, 
    color: '#666',
    fontWeight: 'bold'
  },
  secondaryLabel: {
    color: '#ccc',
    fontWeight: '400',
    fontSize: 13
  },
  textInputContainer: {
    flex: 1,
    paddingLeft: 16
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee' 
  },
  ratingContainer: {
    flexDirection: 'row',
    paddingLeft: 16
  },
  star: {
    color: '#f8be38',
    fontSize: 24
  },
  actionContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  action: {
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#444'
  }
})