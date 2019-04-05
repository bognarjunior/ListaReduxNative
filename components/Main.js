import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Title from './Title';
import AddItem from './AddItem';
import ListItems from './ListItems';
import ClearList from './ClearList';
import { addItem, removeItem, clearList, getItems } from './../actions';


class Main extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  onAddItem = text => {
    this.props.addItem(text);
  }

  onRemoveItem = id => {
    this.props.removeItem(id);
  }

  onClearList = () => {
    this.props.clearList();
  }

  renderList = () => {
    if (this.props.error) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.titleError}>Opsss!</Text>
          <Text style={styles.msgError}>{this.props.error}</Text>
        </View>
      )
    } else {
      return <ListItems items={this.props.items} onRemoveItem={this.onRemoveItem}/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Title text="Lista de Frutas" />
          <AddItem onAddItem={this.onAddItem} />
          { this.props.loadingItems ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text>Carregando...</Text>
            </View>
          ):(
            this.renderList()
          )}
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
  },
  loader: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorView: {
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleError: {
    color: '#ff6666',
    fontSize: 22,
    fontWeight: 'bold',
  },
  msgError: {
    color: '#52527a',
    fontSize: 16,
  }
});

const mapStateToProps = state => {
  return {
    items: state.items,
    loadingItems: state.loadingItems,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addItem,
    removeItem,
    clearList,
    getItems
  }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
