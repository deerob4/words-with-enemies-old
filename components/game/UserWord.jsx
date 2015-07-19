var React = require('react');
var Letter = require('./Letter.jsx');

var UserWord = React.createClass({
	getInitialState: function() {
		return {
			letters: []
		};
	},

	removeFromWord: function(letterToRemove) {
		var letters = this.state.letters;
		for (let letter of letters)
	}

	addToWord: function(letter) {
		// this.state.letters.push({id: 1, value: 'a'})
		var letters = this.state.letters;
		letters.push({ id: letter.id, value: letter.value });
		this.setState({ letters: letters });
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

		var podge = this.addToWord

		return (
			<div onClick={podge} className="formedWord wordRotate" id="userWord" style={wordStyle}>
				{message}
				<ul>{letters}</ul>
			</div>
		);
	}

});

module.exports = UserWord;