import React, { Component, PropTypes } from 'react';
import Octo from './octo';
import Ipsum from './ipsum';

// function makeOcto(img_url) {
//   return (
//     <Octo onPick={this.props.onSelect} url={img_url}/>
//   );
// }

const cats = [
  "https://octodex.github.com/images/nyantocat.gif",
  "https://octodex.github.com/images/welcometocat.png",
  "https://octodex.github.com/images/filmtocat.png",
  "https://octodex.github.com/images/privateinvestocat.jpg",
  "https://octodex.github.com/images/gobbleotron.gif",
  "https://octodex.github.com/images/maxtocat.gif",
  "https://octodex.github.com/images/mummytocat.gif",
  "https://octodex.github.com/images/daftpunktocat-thomas.gif",
  "https://octodex.github.com/images/spidertocat.png"
]

export default class App extends Component {

  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="dex">
        <Ipsum/>
        {/*cats.map(makeOcto)*/}
        {cats.map(src_url => <Octo url={src_url} onPick={this.props.onSelect}/>)}
        <Ipsum/>
        <Ipsum text="I am sorry Josh, wasn't try to be mean."/>
        <Ipsum/>
        <Ipsum/>
      </div>
    );
  }

}
