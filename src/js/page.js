import React from 'react';
import Octo from './octo';

export default class Page extends React.Component {
  render() {
    return (
      <div className="flower">
        <Octo url={this.props.octo}/>
        <button onClick={this.props.onSelect}>I am a delicate flower</button>
        <img src="http://fillmurray.com/50/50"/>
      </div>
    );
  }
}
