import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ClearList = props => {
  return (
    <TouchableOpacity style={styles.clearList}>
			<Text style={styles.labelButton}>{props.text}</Text>
		</TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  clearList: {
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    height: 32,
    backgroundColor: '#0080ff'
  },
  labelButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'
  },
});


export default ClearList
