import React, { Component, PropTypes } from 'react';
import Letterblock from 'components/Letterblock';
import 'styles/wordground.css';

class WordGround extends Component {
  static propTypes = {
    letterblocks: PropTypes.array.isRequired,
    player: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }

  render() {
    let wordStyle = {
      backgroundColor: this.props.colours[this.props.player + 'Secondary'],
      borderColor: this.props.colours[this.props.player + 'Tertiary']
    };

    let messageStyle = {
      color: this.props.colours[this.props.player + 'Tertiary']
    };

    return (
      <div style={wordStyle} className="wordGround">
        {
          this.props.letters.length ?
          <ul style={{ marginTop: '-22px' }}>
            {this.props.letters.map(letterblock =>
              <Letterblock {...letterblock}
                           moveLetter={this.props.removeFromWord}
                           colours={this.props.letterColours[letterblock.id]}
                           key={letterblock.id} />
            )}
          </ul> :
          <h1 style={messageStyle} className="wordGroundMessage">{this.props.message}</h1>
        }
      </div>
    );
  }
}

export default WordGround;
