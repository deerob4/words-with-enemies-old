var React = require('react');
var request = require('superagent');
var generateColours = require('../utils/generateColours');

var Letter = React.createClass({
	getInitialState: function() {
		return {
			backgroundColour: '',
			borderColour: '',
			textColour: ''
		};
	},

	componentDidMount: function() {
		this.changeColours();
	},

	changeColours: function() {
		var newColours = generateColours.letter();
		this.setState({
			backgroundColour: newColours.backgroundColour,
			borderColour: newColours.borderColour,
			textColour: newColours.textColour
		});
	},

	render: function () {
		var letterStyle = {
			backgroundColor: this.state.backgroundColour,
			borderColor: this.state.borderColour,
			margin: '10px 0 0 10px',
			color: this.state.textColour
		};
		return (
			<li className="letter" onClick={this.changeColours} style={letterStyle}>{this.props.value}</li>
		)
	}
});

module.exports = Letter;