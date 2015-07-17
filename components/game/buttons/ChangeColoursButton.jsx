var React = require('react');

var ChangeColoursButton = React.createClass({
	render: function() {
		return (
			<div className="gameButton" onClick={this.props.randomColours} style={this.props.style}>Change colours!</div>
		);
	}
});

module.exports = ChangeColoursButton;