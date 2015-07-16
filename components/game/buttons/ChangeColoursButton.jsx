var React = require('react');

var ChangeColoursButton = React.createClass({

	render: function() {
		return (
			<div className="gameButton" style={this.props.style}>Change colours!</div>
		);
	}

});

module.exports = ChangeColoursButton;