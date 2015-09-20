import React, { Component, PropTypes } from 'react';
import 'styles/letterblock.css';

class Letterblock extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    moveLetter: PropTypes.func.isRequired,
    colours: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  }

  render() {
    return (
      <li className="letterblock"
          style={this.props.colours}
          onClick={this.props.moveLetter}>
          {this.props.value}
      </li>
    );
  }
}

export default Letterblock;
