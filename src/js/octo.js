import React, { Component, PropTypes } from 'react';

export default class Octo extends Component {

  static propTypes = {

    // Expecting a callback for when
    // this component is clicked
    onPick: PropTypes.func,

    // The url of the image to load
    url: PropTypes.string.isRequired
  }

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
