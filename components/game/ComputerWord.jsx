var React = require('react');
var Letter = require('./Letter.jsx');

var ComputerWord = React.createClass({

	getInitialState: function() {
		return {
			letters: []
		};
	},

	render: function() {
		var message;
		var messageStyle = { color: this.props.colours.computerTertiary };

		if (this.state.letters.length === 0) {
			message = <div className="formedWordMessage" style={messageStyle}>Computer word goes here!</div>;
		} else {
			message = '';
		};

		var letters = this.state.letters.map(function(letter) {
			return ( <Letter value={letter.value} key={letter.id} /> )
		});

		var wordStyle = {
			backgroundColor: this.props.colours.computerSecondary,
			borderColor: this.props.colours.computerTertiary
		};

		return (
			<div className="formedWord wordRotate" id="computerWord" style={wordStyle}>
				{message}
				<ul>{letters}</ul>
			</div>
		);
	}

});

module.exports = ComputerWord;