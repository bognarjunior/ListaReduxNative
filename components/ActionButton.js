import React from 'react'

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ActionButton = props => {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={props.onPress}>
			<Text style={styles.labelButton}>{props.text}</Text>
		</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
	actionButton: {
    borderWidth: 1,
    borderRadius: 5,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    backgroundColor: '#0080ff'
  },
  labelButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'
  },
})

export default ActionButton
