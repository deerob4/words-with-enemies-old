import React, { Component, PropTypes } from 'react';
import Letterblock from 'components/Letterblock';
import 'styles/letterbank.css';
import 'styles/divider.css';

class Letterbank extends Component {
  static propTypes = {
    letterblocks: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <div className="divider"></div>
        <ul className="letterbank">
          {this.props.letterblocks.map(letterblock => (
            <Letterblock {...letterblock} key={letterblock.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Letterbank;
