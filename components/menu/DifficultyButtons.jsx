var React = require('react');
var DifficultyButton = require('./DifficultyButton.jsx');

var DifficultyButtons = React.createClass({

	render: function() {
		return (
			<div className="setupButtons" id="difficultyButtons">
				<DifficultyButton colour={this.props.colours.button} difficulty="easy" />
				<DifficultyButton colour={this.props.colours.button} difficulty="medium" />
				<DifficultyButton colour={this.props.colours.button} difficulty="hard" />
			</div>
		);
	}

});

module.exports = DifficultyButtons;