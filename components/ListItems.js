import React, { Component } from 'react'

import {View} from 'react-native';

import ListItem from './ListItem';

export default class ListItems extends Component {
  render() {
    const {items} = this.props;
    return (
      <View>
        {items.map( item => (
          <ListItem key={item.id} item={item} />
        ))}
      </View>
    )
  }
}

