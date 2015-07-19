var React = require('react');
var request = require('superagent');
var generateColours = require('../../utils/generateColours');

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
			color: this.state.textColour
		};

		if (this.props.remove) {
			var letterInfo = { id: this.props.id, value: this.props.value };
			var remove = this.props.remove.bind(null, letterInfo);
		}

		return (
			<li className="letter" onClick={remove} style={letterStyle}>{this.props.value}</li>
		)
	}
});

module.exports = Letter;