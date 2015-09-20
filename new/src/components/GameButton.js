import React, { Component, PropTypes } from 'react';
import 'styles/gameButton.css';

class GameButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    event: PropTypes.func.isRequired
  }

  render() {
    return (
      <div onClick={this.props.event}
           className="gameButton">
           {this.props.text}
      </div>
    );
  }
}

export default GameButton;
