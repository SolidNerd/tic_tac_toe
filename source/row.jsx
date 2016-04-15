import React, {Component} from 'react';
import Item from './item'
export default class Row extends Component{
  render() {
    return (
      <div className={"row"}>
        <Item itemID="1"></Item>
        <Item itemID="2"></Item>
        <Item itemID="3"></Item>
      </div>
    )
  }
}
