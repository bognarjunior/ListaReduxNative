import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';

export default class AddItem extends Component {
  render() {
    return (
      <View style={styles.containerAddItem}>
        <TextInput style={styles.inputItem} />
          <ActionButton text="+" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
	containerAddItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
	},
	inputItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    height: 32,
    padding: 8,
  }
})