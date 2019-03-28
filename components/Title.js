import React from 'react'
import { Text, StyleSheet } from 'react-native';

const Title = props => {
  return (
  <Text style={styles.title}>{props.text}</Text>
  )
}

const styles = StyleSheet.create({
	title: {
		alignSelf: 'center',
		fontSize: 22,
		fontWeight: 'bold'
	}
})

export default Title
