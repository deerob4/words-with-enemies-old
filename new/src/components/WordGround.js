import React, { Component, PropTypes } from 'react';
import Letterblock from 'components/Letterblock';
import 'styles/wordground.css';

class WordGround extends Component {
  static propTypes = {
    letterblocks: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="wordGround">
        {
          this.props.letters.length ?
          <ul>
            {this.props.letters.map(letterblock =>
              <Letterblock {...letterblock} key={letterblock.id} />
            )}
          </ul> :
          <h1 className="wordGroundMessage">{this.props.message}</h1>
        }
      </div>
    );
  }
}

export default WordGround;
