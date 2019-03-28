/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Title from './components/Title';
import ActionButton from './components/ActionButton';

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
          <View style={styles.containerAddItem}>
            <TextInput style={styles.inputItem} />
                <ActionButton text="+" />
          </View>
          <View>
            {fruits.map( fruit => (
              <View key={fruit.id} style={styles.containerListItems}>
                <Text style={styles.labelItem}>
                  {fruit.name}
                </Text>
                <ActionButton text="X" />
              </View>
            ))}
          </View>
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
  },
  
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
  },
  clearList: {
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    height: 32,
    backgroundColor: '#0080ff'
  }
});
