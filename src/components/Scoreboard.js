import React, { Component, PropTypes } from 'react';
import 'styles/scoreboard.css';

class Scoreboard extends Component {
  static propTypes = {
    userScore: PropTypes.number.isRequired,
    computerScore: PropTypes.number.isRequired,
    round: PropTypes.number.isRequired
  }

  render() {
    let roundStyles = { color: this.props.colours.primary };
    let userStyles = { color: this.props.colours.userPrimary };
    let computerStyles = { color: this.props.colours.computerPrimary };

    return (
      <div className="scoreboard">
        <span className="col-sm-4 userRotate" style={userStyles}>You - {this.props.userScore}</span>
        <span className="col-sm-4" style={roundStyles}>Round {this.props.round}</span>
        <span className="col-sm-4 computerRotate" style={computerStyles}>Computer - {this.props.computerScore}</span>
      </div>
    );
  }
}

export default Scoreboard;
