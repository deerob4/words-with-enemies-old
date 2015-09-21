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
    let style = {
      backgroundColor: this.props.colours.primary,
      borderColor: this.props.colours.secondary,
      color: this.props.colours.secondary
    };

    return (
      <div onClick={this.props.event}
           style={style}
           className="gameButton">
           {this.props.text}
      </div>
    );
  }
}

export default GameButton;
