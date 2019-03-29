import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './Title';
import AddItem from './AddItem';
import ListItems from './ListItems';
import ClearList from './ClearList';

export default class Main extends Component {
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
