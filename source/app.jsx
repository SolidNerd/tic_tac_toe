import React, { Component } from 'react';
import Row from './row.jsx';

export default class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </div>
    )
  }
}
