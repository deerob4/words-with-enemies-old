var React = require('react');
var Letter = require('./Letter.jsx');

var UserWord = React.createClass({
	getInitialState: function() {
		return {
			letters: []
		};
	},

	render: function() {
		var message;
		var messageStyle = { color: this.props.colours.userTertiary };

		if (this.state.letters.length === 0) {
			message = <div className="formedWordMessage" style={messageStyle}>Make a word with the letters!</div>;
		} else {
			message = '';
		};

		var letters = this.state.letters.map(function(letter) {
			return ( <Letter value={letter.value} key={letter.id} /> )
		});

		var wordStyle = {
			backgroundColor: this.props.colours.userSecondary,
			borderColor: this.props.colours.userTertiary
		};

		return (
			<div className="formedWord wordRotate" id="userWord" style={wordStyle}>
				{message}
				<ul>{letters}</ul>
			</div>
		);
	}

});

module.exports = UserWord;