var React = require('react');
var DifficultyButton = require('./DifficultyButton.jsx');

var DifficultyButtons = React.createClass({

	render: function() {
		return (
			<div className="setupButtons" id="difficultyButtons">
				<DifficultyButton colours={this.props.colours} difficulty="easy" />
				<DifficultyButton colours={this.props.colours} difficulty="medium" />
				<DifficultyButton colours={this.props.colours} difficulty="hard" />
			</div>
		);
	}

});

module.exports = DifficultyButtons;