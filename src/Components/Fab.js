import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default function Fab({backgroundColor, color, icon, onPress}) {
  return (
    <TouchableHighlight style={[styles.container, {backgroundColor}]} onPress={onPress}>
      <Icon name={icon} style={[styles.icon, {color}]} />
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    height: 50,
    width: 50,
    borderRadius: 50,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 20
  }
})

Fab.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func
}

Fab.defaultProps = {
  backgroundColor: '#222',
  color: '#fff',
  icon: 'plus',
  onPress: ()=>{}
}