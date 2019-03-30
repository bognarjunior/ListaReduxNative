import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';

export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  onChangeText = text => {
    this.setState({ value: text });
  }

  onPress = () => {
    this.props.onAddItem(this.state.value);
    
    this.setState({ value: '' });
  }

  render() {
    return (
      <View style={styles.containerAddItem}>
        <TextInput style={styles.inputItem}  value={this.state.value} onChangeText={this.onChangeText}/>
          <ActionButton text="+" onPress={this.onPress}/>
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