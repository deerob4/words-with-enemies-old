import React from 'react';

export default class Scoreboard extends React.Component {
	constructor(props) {
		super(props);

		this.updateRound = this.updateRound.bind(this);
		this.updateUserScore = this.updateUserScore.bind(this);
		this.updateComputerScore = this.updateUserScore.bind(this);

		this.state = {
			round: 1,
			userScore: 0,
			computerScore: 0
		};
	}

	updateRound() {
		this.setState({ round: this.state.round + 1 });
	}

	updateUserScore() {
		this.setState({ userScore: this.state.userScore + 1 });
	}

	updateComputerScore() {
		this.setState({ computerScore: this.state.computerScore + 1 });
	}
	
	render() {
		let roundStyles = { color: this.props.colours.primary };
		let userStyles = { color: this.props.colours.userPrimary };
		let computerStyles = { color: this.props.colours.computerPrimary };

		return (
			<div className="scoreboard">
				<span className="col-sm-4 userRotate" style={userStyles}>You - {this.state.userScore}</span>
				<span className="col-sm-4" style={roundStyles}>Round {this.state.round}</span>
				<span className="col-sm-4 computerRotate" style={computerStyles}>Computer - {this.state.computerScore}</span>
			</div>
		);
	}
}
