import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import Title from './Title';
import AddItem from './AddItem';
import ListItems from './ListItems';
import ClearList from './ClearList';
import { addItem, removeItem, clearList } from './../actions';

class Main extends Component {

  onAddItem = text => {
    this.props.dispatch(addItem(text));
  }

  onRemoveItem = id => {
    this.props.dispatch(removeItem(id));
  }

  onClearList = () => {
    this.props.dispatch(clearList());
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Title text="Lista de Frutas" />
          <AddItem onAddItem={this.onAddItem} />
          <ListItems items={this.props.items} onRemoveItem={this.onRemoveItem}/>
        </View>
        <ClearList text="Limpar Lista" onPress={this.onClearList} />
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

const mapStateToProps = state => {
  return {
		items: state
  }
}
export default connect(mapStateToProps)(Main);