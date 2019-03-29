/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Title from './components/Title';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';

export default class App extends Component {
  render() {
    const fruits = [
      {
        id: 1,
        name:'Banana'
      }, 
      {
        id: 2,
        name:'Morango'
      }, 
      {
        id: 3,
        name:'Pera'
      }
    ];

    return (
      <View style={styles.container}>
        <View>
          <Title text="Lista de Frutas" />
          <AddItem />
          <ListItems items={fruits}/>
        </View>
        <TouchableOpacity style={styles.clearList}>
          <Text style={styles.labelButton}>Limpar Lista</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 24,
    justifyContent: 'space-between'
  },
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
