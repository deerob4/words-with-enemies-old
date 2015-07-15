var React = require('react');
var capitalizeFirstLetter = require('../../utils/capitalizeFirstLetter.js')

var DifficultyButton = React.createClass({

	render: function() {
		var buttonID = this.props.difficulty + 'Button';
		var label = capitalizeFirstLetter(this.props.difficulty)
		var style = {
			color: this.props.colour,
			borderColor: this.props.colour
		}
		return (
			<div className="difficultyButton menuButton" id={buttonID} style={style}>{label}</div>
		);
	}

});

module.exports = DifficultyButton;