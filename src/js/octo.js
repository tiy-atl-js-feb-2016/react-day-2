import React, { Component } from 'react';

export default class Octo extends Component {

  clickHandler() {
    this.props.onPick(this.props.url);
  }

  render() {
    return (
      <div className="octo" onClick={::this.clickHandler}>
        <img src={this.props.url}/>
      </div>
    );
  }

}
