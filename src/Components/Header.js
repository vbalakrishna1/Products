import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons' ;

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>D E Commerce</Text>
      <Icon name="link-variant" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    paddingVertical: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 20
  }
});
