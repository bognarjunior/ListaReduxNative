import React, { Component } from 'react'

import {StyleSheet, Text, View} from 'react-native';
import ActionButton from './ActionButton';

export default class ListItems extends Component {
  render() {
    const {items} = this.props;
    return (
      <View>
        {items.map( item => (
          <View key={item.id} style={styles.containerListItems}>
            <Text style={styles.labelItem}>
              {item.name}
            </Text>
            <ActionButton text="X" />
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerListItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 4
  },
  labelItem: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})