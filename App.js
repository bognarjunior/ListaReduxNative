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
import ClearList from './components/ClearList';

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
      },
      {
        id: 4,
        name:'Uva'
      }
    ];

    return (
      <View style={styles.container}>
        <View>
          <Title text="Lista de Frutas" />
          <AddItem />
          <ListItems items={fruits}/>
        </View>
        <ClearList text="Limpar Lista" />
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
  }
});
