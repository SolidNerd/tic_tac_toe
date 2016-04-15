import React, {Component} from 'react';

export default class Item extends Component {

  constructor(props){
    super(props);
    this.state = {
      item: ''
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  render() {
    return (
      <div className={"item"} onClick={this.buttonClicked}>{this.state.item}</div>
    )
  }

  buttonClicked() {
    this.setState({item: 'x'});
  }
}
