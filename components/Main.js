import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import Title from './Title';
import AddItem from './AddItem';
import ListItems from './ListItems';
import ClearList from './ClearList';

class Main extends Component {

  
  onAddItem = text => {
    this.props.dispatch({
      type: 'ADICIONAR_ITEM',
      name: text
    });
  }

  render() {
    const {items} = this.props;
    

    return (
      <View style={styles.container}>
        <View>
          <Title text="Lista de Frutas" />
          <AddItem onAddItem={this.onAddItem} />
          <ListItems items={items}/>
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

const mapStateToProps = state => {
  return {
		items: state
  }
}
export default connect(mapStateToProps)(Main);