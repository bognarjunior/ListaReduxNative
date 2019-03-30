import React from 'react'
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from './ActionButton';

const ListItem = props => {
  return (
    <View key={props.item.id} style={styles.containerListItems}>
			<Text style={styles.labelItem}>
				{props.item.value}
			</Text>
			<ActionButton text="X" />
		</View>
  )
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

export default ListItem
