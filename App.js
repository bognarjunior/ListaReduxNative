/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Frutas</Text>
        <View style={styles.containerAddItem}>
          <TextInput style={styles.inputItem} />
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.labelButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 24,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  },
  containerAddItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputItem: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    height: 32,
    padding: 8,
  },
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
  }
});
