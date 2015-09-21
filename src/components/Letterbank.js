import React, { Component, PropTypes } from 'react';
import Letterblock from 'components/Letterblock';
import 'styles/letterbank.css';
import 'styles/divider.css';

class Letterbank extends Component {
  static propTypes = {
    letterblocks: PropTypes.array.isRequired
  }

  render() {
    let style = { backgroundColor: this.props.colours.primary };

    return (
      <div className="letterbank">
        <div className="divider" style={style}></div>
        <ul style={{ padding: 0 }}>
          {this.props.letterblocks.map(letterblock => (
            <Letterblock {...letterblock}
                         moveLetter={this.props.addToWord}
                         colours={this.props.letterColours[letterblock.id]}
                         key={letterblock.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Letterbank;
